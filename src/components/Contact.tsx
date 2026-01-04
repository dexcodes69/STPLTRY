import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  MapPin, 
  ArrowRight, 
  Linkedin,
  X, 
  Loader2, 
  CheckCircle,
  Download 
} from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  // --- STATE MANAGEMENT (Same as Hero.tsx) ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  // --- CONFIGURATION ---
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzHjH2AIZideRQ4f7bT65Ce7qp-afw-y9j1tiSgyIitEQoxVHn92VOkPtQvE0P0pBHtSw/exec"; 
  const SERVICE_ID = "service_h6jo09u";
  const TEMPLATE_ID_USER = "template_zevh3p9"; // Sent to User
  const TEMPLATE_ID_ADMIN = "template_grgdzm5"; // Sent to You
  const PUBLIC_KEY = "Ac12uGMQtjEwdgt1n"; 

  const contactOptions = [
    {
      icon: Mail,
      title: "Email",
      description: "sabujtech100@gmail.com",
      link: "mailto:sabujtech100@gmail.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "sabuj-tech-private-limited",
      link: "https://www.linkedin.com/company/sabuj-tech-private-limited"
    },
    {
      icon: MapPin,
      title: "Research Center",
      description: "IIT Kharagpur, West Bengal, India",
      link: "https://maps.app.goo.gl/U8wJyniXGZ2jF6UVA"
    }
  ];

  // --- HANDLERS (Same as Hero.tsx) ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = '/STPL_Brochure.pdf'; 
    link.download = 'Sabuj_Tech_Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const templateParams = {
      user_name: formData.name,
      user_phone: formData.phone,
      user_email: formData.email,
    };

    try {
      // 1. Send to Google Sheet
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // 2. Send Emails
      await emailjs.send(SERVICE_ID, TEMPLATE_ID_USER, templateParams, PUBLIC_KEY);
      await emailjs.send(SERVICE_ID, TEMPLATE_ID_ADMIN, templateParams, PUBLIC_KEY);
      
      // 3. Trigger Download
      downloadPdf();
      setStatus("success");
      
      // 4. Reset
      setTimeout(() => {
        setIsModalOpen(false);
        setStatus("idle");
        setFormData({ name: "", phone: "", email: "" });
      }, 3000);
      
    } catch (error) {
      console.error("Operation failed:", error);
      downloadPdf(); // Fallback download
      alert("Request processed, but there was a connection issue logging details.");
      setStatus("idle");
    }
  };

  return (
    <section className="section-padding bg-card relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-sm text-primary font-medium mb-4">
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Build a <span className="hero-text">Sustainable Future</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner with us to transform agricultural waste into innovative carbon solutions. 
            Contact our team to explore collaboration opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              <div className="space-y-4">
                {contactOptions.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-transform hover:scale-105"
                  >
                    <Card className="border-primary/20 cursor-pointer hover:shadow-lg transition-shadow hover:border-primary/40">
                      <CardContent className="p-4 flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <contact.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{contact.title}</div>
                          <div style={{ color: '#647a88' }}>{contact.description}</div>
                        </div>
                        <div className="opacity-50 group-hover:opacity-100 transition-opacity">
                          <ArrowRight className="w-4 h-4 text-primary" />
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>

            {/* Partnership Opportunities */}
            <div className="p-6 bg-primary/5 rounded-2xl">
              <h4 className="text-lg font-semibold mb-3">Partnership Opportunities</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li style={{ color: '#647a88' }}>• Industrial collaboration and licensing</li>
                <li style={{ color: '#647a88' }}>• Research and development partnerships</li>
                <li style={{ color: '#647a88' }}>• Technology transfer and commercialization</li>
                <li style={{ color: '#647a88' }}>• Sustainable supply chain integration</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div
            className="p-8 rounded-2xl shadow-card"
            style={{ background: "linear-gradient(to bottom right, white,  #d7f2e3)" }}
          >
            <div className="text-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Ready to Innovate Together?</h3>
                <p className="text-muted-foreground">
                  Join us in revolutionizing industrial applications with sustainable carbon solutions.
                  <span style={{ color: '#647a88' }}> Let's create a climate-positive future through innovation.</span>
                </p>
              </div>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full text-white text-lg"
                  style={{ background: "linear-gradient(135deg, #1fa463, #145c2c)" }}
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                {/* Updated Button triggers Modal instead of direct download */}
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full text-lg"
                  onClick={() => setIsModalOpen(true)}
                >
                  Download Technical Brochure
                </Button>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Cost Effective</div>
                  <div className="text-xs text-muted-foreground">Easy Industrial Adoption</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Sustainable</div>
                  <div className="text-xs" style={{ color: '#647a88' }}>Environmental Impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- POPUP FORM (Identical to Hero.tsx) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative overflow-hidden">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              {status === "success" ? (
                <div className="text-center py-8 space-y-4">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Downloading...</h3>
                  <p className="text-gray-600">
                    Your brochure should start downloading automatically. Check your email for a copy!
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center space-x-2 mb-2">
                    <Download className="w-5 h-5 text-green-600" />
                    <h2 className="text-2xl font-bold">Download Brochure</h2>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm">
                    Please share your details to receive the full technical specification document.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text" name="name" required
                        value={formData.name} onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                        placeholder="Dr. Rakesh Sharma"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel" name="phone" required
                        value={formData.phone} onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email" name="email" required
                        value={formData.email} onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                        placeholder="rakesh@iitkgp.ac.in"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-hero-gradient mt-2" 
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? (
                        <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...</>
                      ) : (
                        "Download Now"
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
            <div className="bg-gray-50 px-8 py-4 border-t text-xs text-center text-gray-500">
              Sabuj Tech respects your privacy.
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Leaf, 
  Zap, 
  Recycle, 
  X, 
  Loader2, 
  CheckCircle,
  Download
} from "lucide-react";
import heroImage from "@/assets/hero-agrotech.jpg";
import emailjs from '@emailjs/browser';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  // --- CONFIGURATION ---
  // Replace with your actual Keys & URLs
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzHjH2AIZideRQ4f7bT65Ce7qp-afw-y9j1tiSgyIitEQoxVHn92VOkPtQvE0P0pBHtSw/exec"; 
  const SERVICE_ID = "service_h6jo09u";
  const TEMPLATE_ID_USER = "template_zevh3p9"; // Sent to User
  const TEMPLATE_ID_ADMIN = "template_grgdzm5"; // Sent to You
  const PUBLIC_KEY = "Ac12uGMQtjEwdgt1n"; 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 1. Function to handle Smooth Scroll to Technology Section
  const scrollToTechnology = () => {
    const element = document.getElementById('technology');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 2. Function to Trigger PDF Download
  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = '/STPL_Brochure.pdf'; // Ensure file is in 'public' folder
    link.download = 'Sabuj_Tech_Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 3. Main Submission Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const templateParams = {
      user_name: formData.name,
      user_phone: formData.phone,
      user_email: formData.email,
    };

    try {
      // A. Send Data to Google Sheet (No-cors mode required for opaque response)
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // B. Send Welcome Email to User
      await emailjs.send(SERVICE_ID, TEMPLATE_ID_USER, templateParams, PUBLIC_KEY);

      // C. Send Notification Email to Admin (You)
      await emailjs.send(SERVICE_ID, TEMPLATE_ID_ADMIN, templateParams, PUBLIC_KEY);
      
      // D. Trigger Download & Success State
      downloadPdf();
      setStatus("success");
      
      // Reset
      setTimeout(() => {
        setIsModalOpen(false);
        setStatus("idle");
        setFormData({ name: "", phone: "", email: "" });
      }, 3000);
      
    } catch (error) {
      console.error("Operation failed:", error);
      // Even if email fails, we try to download the PDF so the user gets what they came for
      downloadPdf(); 
      alert("Request processed, but there was a connection issue logging details.");
      setStatus("idle");
    }
  };

  return (
    <section
      className="pt-16 min-h-screen flex items-center relative"
      style={{ background: "linear-gradient(to bottom, white,  #d7f2e3)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-primary font-medium">
                <Leaf className="w-4 h-4" />
                <span>Climate Tech Innovation</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Transforming{" "}
                <span className="hero-text">Agricultural Waste</span>{" "}
                into <span className="hero-text">Green Carbon</span>
              </h1>
              <p className="text-xl max-w-lg" style={{ color: '#647a88' }}>
                Sabuj Tech delivers patented, sustainable carbon solutions from agricultural residues.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-hero-gradient text-lg"
                onClick={scrollToTechnology}
              >
                Explore Our Technology <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" size="lg" className="text-lg"
                onClick={() => setIsModalOpen(true)}
              >
                Download Brochure
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">50%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">143×</div>
                <div className="text-sm text-muted-foreground">Stronger Shield</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Patents Filed</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img src={heroImage} alt="Hero" className="rounded-2xl shadow-elegant w-full" />
          </div>
        </div>
      </div>

      {/* --- POPUP FORM --- */}
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

                    {/* Phone (New Field) */}
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

export default Hero;
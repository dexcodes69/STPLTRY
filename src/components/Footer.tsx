import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#ffd21f", color: "#07602b" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/image.png" alt="Sabuj Tech Logo" className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Sabuj Tech</h3>
            </div>
            <p className="mb-4 max-w-md text-[#07602b]">
              Together for change.
            </p>

            {/* Google Map Embed */}
            <div className="mb-6 rounded-lg overflow-hidden border-2 border-[#07602b] shadow-sm max-w-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.024345097457!2d87.30800877587129!3d22.314923142371983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d440255555547%3A0x6f2f20e4021251c7!2sIndian%20Institute%20of%20Technology%20Kharagpur!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin"
                width="100%" 
                height="150" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="IIT Kharagpur Map"
              ></iframe>
            </div>

            {/* Social & Email Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="mailto:sabujtech100@gmail.com"
                className="p-2 border-2 border-[#07602b] rounded-full hover:bg-[#07602b] hover:text-[#ffd21f] transition-colors duration-300"
                aria-label="Email Us"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/sabuj-tech-private-limited"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-[#07602b] rounded-full hover:bg-[#07602b] hover:text-[#ffd21f] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#07602b]">Quick Links</h4>
            <ul className="space-y-2 text-sm text-[#07602b]">
              <li>
                <a href="#about" className="hover:text-[#065021] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-[#065021] transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#065021] transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#065021] transition-colors">
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-[#07602b]">Our Solutions</h4>
            <ul className="space-y-2 text-sm text-[#07602b]">
              <li>Antimicrobial Solutions</li>
              <li>Anticorrosive Coatings</li>
              <li>Fire Retardant Materials</li>
              <li>Green Carbon Formulations</li>
            </ul>
          </div>
        </div>

        <div
          className="border-t mt-8 pt-8 text-center"
          style={{
            borderColor: "#07602b",
            borderTopWidth: 1,
            color: "#07602b",
          }}
        >
          <p style={{ color: "#07602b" }} className="text-sm">
            © 2024 Sabuj Tech Private Limited. All rights reserved. | Climate Tech
            Innovation for Sustainable Future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
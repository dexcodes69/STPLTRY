import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
  <header className="fixed top-0 w-full text-black backdrop-blur-md border-b border-border z-50" style={{ backgroundColor: '#ffd21f' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <img src="/logo.png" alt="Sabuj Tech Logo" className="w-8 h-8" />
            <div className="flex flex-col leading-tight">
              <h1 className="text-2xl font-bold" style={{ color: '#07602b' }}>Sabuj Tech</h1>
              <span className="text-xs text-muted-foreground">Together for change</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-[#07602b] hover:text-[#065021] transition-colors">
              About
            </a>
            <a href="#technology" className="text-[#07602b] hover:text-[#065021] transition-colors">
              Technology
            </a>
            <a href="#products" className="text-[#07602b] hover:text-[#065021] transition-colors">
              Products
            </a>
            <a href="#team" className="text-[#07602b] hover:text-[#065021] transition-colors">
              Team
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" className="bg-hero-gradient hover:bg-[#07602b] hover:text-white">
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#07602b] hover:text-[#065021]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              <a href="#about" className="block px-3 py-2 text-[#07602b] hover:text-[#065021]">
                About
              </a>
              <a href="#technology" className="block px-3 py-2 text-[#07602b] hover:text-[#065021]">
                Technology
              </a>
              <a href="#products" className="block px-3 py-2 text-[#07602b] hover:text-[#065021]">
                Products
              </a>
              <a href="#team" className="block px-3 py-2 text-[#07602b] hover:text-[#065021]">
                Team
              </a>
              <div className="px-3 py-2">
                <Button variant="default" className="w-full bg-[#07602b] text-white hover:bg-[#065021]">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
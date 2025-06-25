
import { useState } from "react";
import { Menu, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Menu */}
            <Button 
              variant="ghost" 
              className="flex items-center gap-1 sm:gap-2 text-black hover:bg-gray-100 font-inter uppercase tracking-wider text-xs sm:text-sm p-2 sm:p-3"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span className="hidden xs:inline">MENU</span>
            </Button>
            
            {/* Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link to="/">
                <h1 className="text-sm sm:text-lg font-inter font-medium tracking-wider">JC © 2024</h1>
              </Link>
            </div>
            
            {/* Book */}
            <Button variant="ghost" asChild className="flex items-center gap-1 sm:gap-2 text-black hover:bg-gray-100 font-inter uppercase tracking-wider text-xs sm:text-sm p-2 sm:p-3">
              <Link to="/book">
                <Calendar size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="hidden xs:inline">BOOK</span>
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Navigation;

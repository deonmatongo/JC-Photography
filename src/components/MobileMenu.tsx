
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuItems = [
    { title: "About", href: "#about" },
    { title: "Projects", href: "/projects" },
    { title: "Book a Session", href: "/book" }
  ];

  return (
    <>
      {/* Desktop Sheet Sidebar */}
      <div className="hidden md:block">
        <Sheet open={isOpen} onOpenChange={onClose}>
          <SheetContent side="left" className="w-80 bg-white">
            <SheetHeader>
              <SheetTitle className="text-lg font-inter font-medium tracking-wider">MENU</SheetTitle>
            </SheetHeader>
            
            <div className="flex flex-col justify-center h-full">
              <nav className="space-y-8">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href.startsWith('#') ? '/' : item.href}
                    onClick={onClose}
                    className="block text-2xl font-inter font-light tracking-wider hover:text-gray-600 transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>
            
            <div className="absolute bottom-4 left-6">
              <p className="text-xs font-inter text-gray-500 tracking-wider">JC © 2024</p>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Mobile Full Screen Overlay */}
      <div className="md:hidden">
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-white">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <h2 className="text-lg font-inter font-medium tracking-wider">MENU</h2>
                <Button 
                  variant="ghost" 
                  onClick={onClose}
                  className="p-2"
                >
                  <X size={20} />
                </Button>
              </div>
              
              {/* Menu Items */}
              <div className="flex-1 flex flex-col justify-center px-4">
                <nav className="space-y-8">
                  {menuItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href.startsWith('#') ? '/' : item.href}
                      onClick={onClose}
                      className="block text-2xl sm:text-3xl font-inter font-light tracking-wider hover:text-gray-600 transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </div>
              
              {/* Footer */}
              <div className="p-4 border-t border-gray-100">
                <p className="text-xs font-inter text-gray-500 tracking-wider">JC © 2024</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileMenu;

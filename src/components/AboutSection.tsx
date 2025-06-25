
import { useState } from "react";
import { useImageColorTransition } from "@/hooks/useImageColorTransition";

const AboutSection = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  
  const image1Transition = useImageColorTransition();
  const image2Transition = useImageColorTransition();

  const contactInfo = {
    phone: "+48 123 456 789",
    email: "hello@jcphotography.com",
    location: "Warsaw, Poland"
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(selectedItem === item ? null : item);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Image */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4 order-2 lg:order-1">
          <img 
            ref={image1Transition.imageRef}
            src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop"
            alt="Portrait in water"
            className={`w-full h-48 sm:h-56 lg:h-64 object-cover cursor-pointer ${image1Transition.imageClassName}`}
            onClick={image1Transition.handleImageClick}
          />
          <img 
            ref={image2Transition.imageRef}
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=300&fit=crop"
            alt="Group portrait"
            className={`w-full h-36 sm:h-40 lg:h-48 object-cover cursor-pointer ${image2Transition.imageClassName}`}
            onClick={image2Transition.handleImageClick}
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6 lg:space-y-8 order-1 lg:order-2 text-center lg:text-left">
          <h2 className="text-xl sm:text-2xl font-inter font-medium tracking-wider">ABOUT US</h2>
          
          <p className="text-gray-300 font-inter leading-relaxed text-sm sm:text-base">
            At JC Photography, we believe in the power of pictures to tell stories. We're passionate about capturing the 
            moments that matter most to you, creating lasting memories you can treasure. Step into a world of visual 
            storytelling with our services.
          </p>
          
          <div className="grid grid-cols-1 gap-4 lg:gap-6 pt-6 lg:pt-8">
            <div 
              className="flex items-center justify-between border-b border-gray-600 pb-3 lg:pb-4 cursor-pointer hover:border-gray-500 transition-colors"
              onClick={() => handleItemClick('phone')}
            >
              <span className="text-gray-400 text-xs sm:text-sm">01.</span>
              <span className="font-inter tracking-wider text-sm sm:text-base">PHONE NUMBER</span>
            </div>
            {selectedItem === 'phone' && (
              <div className="text-gray-300 text-sm sm:text-base font-inter pl-6 -mt-2">
                {contactInfo.phone}
              </div>
            )}
            
            <div 
              className="flex items-center justify-between border-b border-gray-600 pb-3 lg:pb-4 cursor-pointer hover:border-gray-500 transition-colors"
              onClick={() => handleItemClick('email')}
            >
              <span className="text-gray-400 text-xs sm:text-sm">02.</span>
              <span className="font-inter tracking-wider text-sm sm:text-base">E-MAIL ADDRESS</span>
            </div>
            {selectedItem === 'email' && (
              <div className="text-gray-300 text-sm sm:text-base font-inter pl-6 -mt-2">
                {contactInfo.email}
              </div>
            )}
            
            <div 
              className="flex items-center justify-between border-b border-gray-600 pb-3 lg:pb-4 cursor-pointer hover:border-gray-500 transition-colors"
              onClick={() => handleItemClick('location')}
            >
              <span className="text-gray-400 text-xs sm:text-sm">03.</span>
              <span className="font-inter tracking-wider text-sm sm:text-base">COMPANY LOCATION</span>
            </div>
            {selectedItem === 'location' && (
              <div className="text-gray-300 text-sm sm:text-base font-inter pl-6 -mt-2">
                {contactInfo.location}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

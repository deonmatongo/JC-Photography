
import { useImageColorTransition } from "@/hooks/useImageColorTransition";

const ServicesSection = () => {
  const services = [
    { number: "(01)", title: "WEDDING", active: true },
    { number: "(02)", title: "PORTRAIT", active: false },
    { number: "(03)", title: "EVENT", active: false },
    { number: "(04)", title: "PRODUCT", active: true },
    { number: "(05)", title: "EDITORIAL", active: false }
  ];

  const serviceImageTransition = useImageColorTransition();

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Image */}
        <div className="order-2 lg:order-1">
          <img 
            ref={serviceImageTransition.imageRef}
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop"
            alt="Product photography setup"
            className={`w-full h-64 sm:h-72 lg:h-80 object-cover cursor-pointer ${serviceImageTransition.imageClassName}`}
            onClick={serviceImageTransition.handleImageClick}
          />
          
          <div className="mt-4 lg:mt-6 space-y-2 text-center lg:text-left">
            <p className="font-inter font-medium">PRODUCT</p>
            <p className="font-inter font-light">FROM 400 PLN</p>
            <p className="text-gray-600 font-inter text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
              Elevate your brand with our product photography.
              We artfully showcase your offerings.
            </p>
          </div>
        </div>

        {/* Right Services List */}
        <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
          {services.map((service, index) => (
            <div key={index} className="flex items-center justify-between py-3 lg:py-4 border-b border-gray-200">
              <div className="flex items-center gap-4 lg:gap-6">
                <span className="text-gray-400 font-inter text-xs sm:text-sm">{service.number}</span>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-inter font-light tracking-wider">{service.title}</h3>
              </div>
              
              {service.active && (
                <div className="w-6 lg:w-8 h-px bg-black"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

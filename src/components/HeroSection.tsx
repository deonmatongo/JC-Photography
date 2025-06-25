
import { useImageColorTransition } from "@/hooks/useImageColorTransition";

const HeroSection = () => {
  const heroImageTransition = useImageColorTransition();
  const smallImageTransition = useImageColorTransition();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden pt-14 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6 lg:space-y-8 animate-fade-in order-2 lg:order-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-inter font-light leading-tight">
            WE MAKE—
            <br />
            <em className="font-playfair italic">MEMORIES</em>
            <br />
            LAST A
            <br />
            LIFETIME
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
            <img 
              ref={smallImageTransition.imageRef}
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=300&h=200&fit=crop"
              alt="Hands holding"
              className={`w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-36 object-cover cursor-pointer ${smallImageTransition.imageClassName}`}
              onClick={smallImageTransition.handleImageClick}
            />
            <div className="flex-1 max-w-sm">
              <p className="text-gray-600 font-inter leading-relaxed text-sm sm:text-base">
                With our creative and expert photography, we ensure your special moments are preserved specially for years to come.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="animate-fade-in order-1 lg:order-2">
          <img 
            ref={heroImageTransition.imageRef}
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=800&fit=crop"
            alt="Portrait"
            className={`w-full h-64 sm:h-80 md:h-96 lg:h-[600px] object-cover cursor-pointer ${heroImageTransition.imageClassName}`}
            onClick={heroImageTransition.handleImageClick}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

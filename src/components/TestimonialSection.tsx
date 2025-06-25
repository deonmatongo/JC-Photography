
import { useImageColorTransition } from "@/hooks/useImageColorTransition";

const TestimonialSection = () => {
  const testimonialImageTransition = useImageColorTransition();

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-inter font-light leading-tight text-center lg:text-left">
            SEE THEIR
            <br />
            <em className="font-playfair italic">WORDS</em>
            <br />
            — ABOUT US
          </h2>
          
          <div className="space-y-4 lg:space-y-6">
            <p className="text-gray-300 font-inter leading-relaxed text-sm sm:text-base">
              We were absolutely blown away by the extraordinary talent at JC Photography. From our 
              very first consultation to the final delivery of our wedding album, their dedication 
              to capturing our special day was evident. Our wedding photos tell a story of 
              love, emotion, and sheer joy that we will cherish forever. They possess an 
              incredible knack for capturing not just moments, but the essence of our 
              connection. They transformed our wedding day into an artful narrative. If you are 
              seeking special photographers for your memorable events, look no further than 
              JC Photography Studio.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between pt-4 lg:pt-6 border-t border-gray-600 gap-2 sm:gap-0">
              <div>
                <p className="font-inter font-medium text-center sm:text-left">JESSICA & MARK WINSON</p>
              </div>
              <div>
                <p className="text-gray-400">2023</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-1 lg:order-2">
          <img 
            ref={testimonialImageTransition.imageRef}
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=600&fit=crop"
            alt="Testimonial"
            className={`w-full h-64 sm:h-80 lg:h-96 object-cover cursor-pointer ${testimonialImageTransition.imageClassName}`}
            onClick={testimonialImageTransition.handleImageClick}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

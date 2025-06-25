
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-inter font-light leading-tight">
            DO <em className="font-playfair italic">NOT</em> LET YOUR
            <br />
            MEMORIES <em className="font-playfair italic">JUST</em>
            <br />
            <em className="font-playfair italic">PASSING AWAY</em>
          </h2>
          
          <div className="space-y-3 lg:space-y-4">
            <p className="font-inter font-medium tracking-wider text-sm sm:text-base">STAY UPDATED FOR PROMO</p>
            <p className="font-inter font-medium tracking-wider text-sm sm:text-base">SUBSCRIBE TO OUR NEWSLETTER</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
            <Input 
              placeholder="Enter Your E-Mail Here"
              className="border-0 border-b border-black rounded-none bg-transparent pb-2 font-inter text-sm sm:text-base flex-1"
            />
            <Button className="bg-black text-white px-6 sm:px-8 py-2 font-inter tracking-wider hover:bg-gray-800 text-sm sm:text-base whitespace-nowrap">
              Submit
            </Button>
          </div>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 order-1 lg:order-2">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=400&fit=crop"
            alt="Portrait 1"
            className="w-full h-48 sm:h-56 lg:h-64 object-cover grayscale"
          />
          <img 
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=200&fit=crop"
            alt="Portrait 2"
            className="w-full h-24 sm:h-28 lg:h-32 object-cover grayscale mt-8 sm:mt-10 lg:mt-12"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;


import { useImageColorTransition } from "@/hooks/useImageColorTransition";

const PortfolioSection = () => {
  const projects = [
    {
      title: "NATURAL CONCEPTUAL",
      description: "Children of nature's grandeur, linked relationship.",
      date: "03 / 08",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=400&fit=crop"
    },
    {
      title: "GRAND LUXURY FASHION",
      description: "Professional event photos for a fashion shop opening.",
      date: "10 / 23",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=600&h=400&fit=crop"
    }
  ];

  const project1ImageTransition = useImageColorTransition();
  const project2ImageTransition = useImageColorTransition();
  const imageTransitions = [project1ImageTransition, project2ImageTransition];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12 lg:mb-16 gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-inter font-light">WORKING</h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-playfair italic">PROJECTS</h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12 lg:space-y-16">
          {projects.map((project, index) => {
            const imageTransition = imageTransitions[index];
            return (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img 
                    ref={imageTransition.imageRef}
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-64 sm:h-72 lg:h-80 object-cover cursor-pointer ${imageTransition.imageClassName}`}
                    onClick={imageTransition.handleImageClick}
                  />
                </div>
                
                <div className={`space-y-4 lg:space-y-6 text-center lg:text-left ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-xl sm:text-2xl font-inter font-medium">{project.title}</h3>
                  <p className="text-gray-600 font-inter leading-relaxed text-sm sm:text-base max-w-md mx-auto lg:mx-0">
                    {project.description}
                  </p>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-inter font-light text-gray-300">
                    {project.date}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

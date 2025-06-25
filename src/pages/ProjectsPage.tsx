
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useImageColorTransition } from "@/hooks/useImageColorTransition";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "NATURAL CONCEPTUAL",
      category: "Portrait Photography",
      description: "Children of nature's grandeur, capturing the essence of human connection with the natural world. This series explores the relationship between humanity and nature through intimate portraiture.",
      date: "03 / 08",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=500&fit=crop"
      ]
    },
    {
      id: 2,
      title: "GRAND LUXURY FASHION",
      category: "Event Photography",
      description: "Professional event photography for a luxury fashion boutique opening. Capturing the elegance and sophistication of high-end fashion in an intimate setting.",
      date: "10 / 23",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=500&fit=crop"
      ]
    },
    {
      id: 3,
      title: "URBAN STORIES",
      category: "Street Photography",
      description: "Documenting the raw energy and untold stories of city life. Each frame captures a moment of authentic human experience in urban environments.",
      date: "06 / 24",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=500&fit=crop"
      ]
    },
    {
      id: 4,
      title: "TIMELESS WEDDINGS",
      category: "Wedding Photography",
      description: "Preserving the most precious moments of love and commitment. Every image tells the unique story of couples beginning their journey together.",
      date: "02 / 24",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=500&fit=crop"
      ]
    }
  ];

  // Create image transitions for main project images
  const projectImageTransitions = [
    useImageColorTransition(),
    useImageColorTransition(),
    useImageColorTransition(),
    useImageColorTransition()
  ];

  // Create image transitions for gallery images
  const galleryImageTransitions = projects.map(() => [
    useImageColorTransition(),
    useImageColorTransition(),
    useImageColorTransition()
  ]);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-inter font-light leading-tight mb-6">
              OUR—
              <br />
              <em className="font-playfair italic">PROJECTS</em>
            </h1>
            <p className="text-gray-600 font-inter text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              A collection of our finest work, showcasing the art of capturing life's most precious moments.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 lg:space-y-32">
            {projects.map((project, index) => {
              const mainImageTransition = projectImageTransitions[index];
              const galleryTransitions = galleryImageTransitions[index];
              
              return (
                <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                  {/* Main Project Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img 
                      ref={mainImageTransition.imageRef}
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-80 sm:h-96 lg:h-[500px] object-cover cursor-pointer ${mainImageTransition.imageClassName}`}
                      onClick={mainImageTransition.handleImageClick}
                    />
                  </div>
                  
                  {/* Project Details */}
                  <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {/* Title and Category */}
                    <div className="space-y-4">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter font-medium">
                        {project.title}
                      </h2>
                      <p className="text-gray-500 font-inter text-sm sm:text-base uppercase tracking-wider">
                        {project.category}
                      </p>
                      <div className="text-5xl sm:text-6xl lg:text-7xl font-inter font-light text-gray-200">
                        {project.date}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 font-inter leading-relaxed text-base sm:text-lg">
                      {project.description}
                    </p>
                    
                    {/* Gallery Grid */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-4">
                      {project.gallery.map((image, galleryIndex) => {
                        const imageTransition = galleryTransitions[galleryIndex];
                        return (
                          <img 
                            key={galleryIndex}
                            ref={imageTransition.imageRef}
                            src={image}
                            alt={`${project.title} gallery ${galleryIndex + 1}`}
                            className={`w-full h-24 sm:h-32 lg:h-40 object-cover cursor-pointer ${imageTransition.imageClassName}`}
                            onClick={imageTransition.handleImageClick}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;

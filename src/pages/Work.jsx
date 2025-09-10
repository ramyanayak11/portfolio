import { motion, AnimatePresence } from "framer-motion";
import { useState , useRef } from "react";
import "./Work.css";

const projects = [
  {
    title: "Mindful Journal",
    description:
      "A web-based journaling application designed to help users maintain consistent self-reflection practices. Addresses common journaling challenges like \'blank page anxiety\'.",
    link: "https://github.com/ramyanayak11/Mindful-Journal",
    buttonText: "View Code →",
    demoType: "video",    // "video" or "images", depending on what you want to show on the back of the card
    demoContent: {
      video: "/portfolio/mindful-journal-demo/mindful_journal.mov"
    }
  },
  {
    title: "Landing Game",
    description:
      "A hot-air balloon landing game with physics-based movement, terrain collision, and interactive controls. Ranked in the top 5 of 17 submissions.",
    link: "https://github.com/ramyanayak11/Landing-Game",
    buttonText: "View Code →",
    demoType: "images",
    demoContent: {
      images: [
        "/portfolio/landing-game-demo/1_main.png",
        "/portfolio/landing-game-demo/2_easy.png",
        "/portfolio/landing-game-demo/3_medium.png",
        "/portfolio/landing-game-demo/4_end.png"
      ]
    }
  },
  {
    title: "Movie Rental System",
    description:
      "A database-driven movie rental system that allows customers and staff to manage rentals. Features include late fee calculations, rental tracking, and reviews.",
    link: "https://github.com/ramyanayak11/Movie-Rental-System",
    buttonText: "View Code →",
    demoType: "video",
    demoContent: {
      video: "/portfolio/movie-rentals-demo/movie_rentals.mov"
    }
  },
  {
    title: "Enhanced Ray Tracer",
    description:
      "A rendering program that simulates realistic lighting and surface details in 3D scenes. Implemented using advanced rendering techniques like Phong and Lambert shading, texture mapping, and bump mapping.",
    link: "https://github.com/ramyanayak11/Enhanced-Ray-Tracer",
    buttonText: "View Code →",
    demoType: "images",
    demoContent: {
      images: [
        "/portfolio/ray-tracer-demo/1_main.png",
        "/portfolio/ray-tracer-demo/2_bump.png",
        "/portfolio/ray-tracer-demo/3_scaleX.png",
        "/portfolio/ray-tracer-demo/4_scaleY.png",
        "/portfolio/ray-tracer-demo/5_ui.png"
      ]
    }
  },
  {
    title: "3D Mesh Viewer",
    description:
      "A tool for loading and viewing OBJ models. Supports basic lighting and shading for interactive visualization.",
    link: "https://github.com/ramyanayak11/3D-Mesh-Viewer",
    buttonText: "View Code →",
    demoType: "images",
    demoContent: {
      images: [
        "/portfolio/mesh-viewer-demo/1_mesh.png",
        "/portfolio/mesh-viewer-demo/2_multiple.png"
      ]
    }
  },
  {
    title: "Wander – Itinerary App",
    description:
      "A prototype of a travel itinerary app, designed using Adobe XD.",
    link: "https://assets.adobe.com/id/urn:aaid:sc:US:1fc7b5e7-27cf-4fbc-9176-ff8db39ae6e9?view=published",
    buttonText: "View Prototype →"
    // no additional demo for this project
  },
  {
    title: "Social Network",
    description:
      "An application simulating a social network with profile and connection management. Supports adding and removing friends, viewing friend lists, etc.",
    link: "https://github.com/ramyanayak11/Social-Network",
    buttonText: "View Code →",
    // no additional demo for this project
  }
];

export default function Work() {
  const [flippedCard, setFlippedCard] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const videoRefs = useRef({});

  const handleCardFlip = (index) => {
    // If we're closing a card with a video, pause it
    if (flippedCard === index && videoRefs.current[index]) {
      videoRefs.current[index].pause();
    }
    
    setFlippedCard(flippedCard === index ? null : index);
    if (flippedCard !== index) {
      setCurrentImageIndex({ ...currentImageIndex, [index]: 0 });
    }
  };

  const nextImage = (projectIndex) => {
    const project = projects[projectIndex];
    const totalImages = project.demoContent?.images?.length || 0;
    setCurrentImageIndex({
      ...currentImageIndex,
      [projectIndex]: ((currentImageIndex[projectIndex] || 0) + 1) % totalImages
    });
  };

  const prevImage = (projectIndex) => {
    const project = projects[projectIndex];
    const totalImages = project.demoContent?.images?.length || 0;
    setCurrentImageIndex({
      ...currentImageIndex,
      [projectIndex]: ((currentImageIndex[projectIndex] || 0) - 1 + totalImages) % totalImages
    });
  };

  return (
    
    <div className={`work-page ${flippedCard !== null ? 'demo-open' : ''}`}>
      <span className="kicker">work</span>
      <h2>Projects</h2>
      <div className="card-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`project-card-container ${flippedCard === index ? 'flipped' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="card-flipper">
              {/* Front of card */}
              <motion.div
                className="project-card front"
                whileHover={{ scale: flippedCard === null ? 1.05 : 1 }}
              >
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="button-container">
                  {project.demoContent && (
                    <button
                      className="demo-button"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCardFlip(index);
                      }}
                    >
                      View →
                    </button>
                  )}
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.buttonText}
                  </a>
                </div>
              </motion.div>

              {/* Back of card */}
              <motion.div className="project-card back">
                <div className="demo-header">
                  <h2>{project.title}</h2>
                  <button
                    className="close-button"
                    onClick={() => handleCardFlip(index)}
                  >
                    ✕
                  </button>
                </div>

                <div className="demo-content">
                  {project.demoType === "video" && project.demoContent?.video ? (
                    <video
                      ref={(el) => {
                        if (el) {
                          videoRefs.current[index] = el;
                        }
                      }}
                      src={project.demoContent.video}
                      controls
                      className="demo-video"
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : project.demoType === "images" && project.demoContent?.images ? (
                    <div className="demo-images">
                      <div className="image-container">
                        <img
                          src={project.demoContent.images[currentImageIndex[index] || 0]}
                          alt={`${project.title} demo ${(currentImageIndex[index] || 0) + 1}`}
                          className="demo-image"
                        />
                        {project.demoContent.images.length > 1 && (
                          <>
                            <button
                              className="nav-button prev"
                              onClick={() => prevImage(index)}
                            >
                              ‹
                            </button>
                            <button
                              className="nav-button next"
                              onClick={() => nextImage(index)}
                            >
                              ›
                            </button>
                          </>
                        )}
                      </div>
                      {project.demoContent.images.length > 1 && (
                        <div className="image-indicators">
                          {project.demoContent.images.map((_, imgIndex) => (
                            <button
                              key={imgIndex}
                              className={`indicator ${imgIndex === (currentImageIndex[index] || 0) ? 'active' : ''}`}
                              onClick={() => setCurrentImageIndex({
                                ...currentImageIndex,
                                [index]: imgIndex
                              })}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <p>Demo content not available</p>
                  )}
                </div>

                <div className="back-buttons">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.buttonText}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

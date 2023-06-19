import "./_project.scss";
import chiflixImage from "../../assets/img/project-images/chiflix.jpg";
import natoursImage from "../../assets/img/project-images/natours.jpg";
import samsSushi from "../../assets/img/project-images/samsSushi.jpg";
import { useRef, useState } from "react";
const projectList = [
  {
    title: `Chiflix`,
    description: `A Netflix Inspired replica. It can play trailers from youtube`,
    imgSrc: chiflixImage,
    link: `https://chiragnarasimha.github.io/chiflix/`,
  },
  {
    title: `Natours`,
    description: `A Website that is inspired by travel booking agency`,
    imgSrc: natoursImage,
    link: `https://chiragnarasimha.github.io/natours/`,
  },
  {
    title: `Sams Sushi`,
    description: `A website for ordering food`,
    imgSrc: samsSushi,
    link: `https://chiragnarasimha.github.io/food-ordering-app`,
  },
];
const Project = () => {
  const projectItemRef = useRef<HTMLDivElement>(null);

  const [isHovering, setIsHovering] = useState<boolean>(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <section className="project" id="projects">
      <div className="project__container">
        <h1 className="project__header">Projects</h1>
        <div className="project__items__container">
          {projectList.map((project, index) => (
            <div
              className="project__items__item"
              key={`${project.title} ${index}`}
              ref={projectItemRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={project.imgSrc}
                alt={`ProjectTitle: ${project.title}`}
                className="project__items__item__img"
              />
              <div className="project__items__item__description">
                <div className="project__items__item__description__container">
                  <h2 className="project__items__item__description__heading">
                    {project.title}
                  </h2>
                  <p className="project__items__item__description__description-text">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >{`Live Demo >`}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;

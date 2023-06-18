import "./_project.scss";
import chiflixImage from "../../assets/img/project-images/chiflix.jpg";
import natoursImage from "../../assets/img/project-images/natours.jpg";
import samsSushi from "../../assets/img/project-images/samsSushi.jpg";
const projectList = [
  {
    title: `Chiflix`,
    description: `A Netflix Inspired replica. It can play trailers from youtube`,
    imgSrc: chiflixImage,
  },
  {
    title: `Natours`,
    description: `A Website that is inspired by travel booking agency`,
    imgSrc: natoursImage,
  },
  {
    title: `Sams Sushi`,
    description: `A website for ordering food`,
    imgSrc: samsSushi,
  },
];
const Project = () => {
  return (
    <section className="project" id="projects">
      <div className="project__container">
        <h1 className="project__header">Projects</h1>
        <div className="project__items__container">
          {projectList.map((project, index) => (
            <div
              className="project__items__item"
              key={`${project.title} ${index}`}
            >
              <img
                src={project.imgSrc}
                alt={`ProjectTitle: ${project.title}`}
                className="project__items__item__img"
              />
              <span className="project__items__item__description">
                <div className="project__items__item__description__container">
                  <h2 className="project__items__item__description__heading">
                    {project.title}
                  </h2>
                  <p className="project__items__item__description__description-text">
                    {project.description}
                  </p>
                </div>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;

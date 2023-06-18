import CircleProgressBar from "./CircleProgressBar";
import "./_skills.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const skillsList = [
  {
    skillName: `JavaScript`,
    inputPercentage: 80,
  },
  {
    skillName: `TypeScript`,
    inputPercentage: 80,
  },
  {
    skillName: `React`,
    inputPercentage: 70,
  },
  {
    skillName: `Shell Scripts`,
    inputPercentage: 75,
  },
  {
    skillName: `Python`,
    inputPercentage: 30,
  },
];

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <Carousel
          responsive={responsive}
          // infinite={true}
          className="owl-carousel owl-theme skills__slider"
        >
          {skillsList.map((skill, index) => (
            <CircleProgressBar
              key={`${skill.skillName} ${index}`}
              className="skills__item"
              skillName={skill.skillName}
              inputPercentage={skill.inputPercentage}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Skills;

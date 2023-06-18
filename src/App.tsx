import Carousel from "react-multi-carousel";
import "./App.scss";
import Banner from "./Components/Banner/Banner.tsx";
import NavBar from "./Components/NavBar/NavBar.tsx";
import CircleProgressBar from "./Components/Skills/CircleProgressBar.tsx";
import Skills from "./Components/Skills/Skills.tsx";

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
function App() {
  return (
    <>
      <main className="app__container">
        <NavBar />
        <Banner />
        <Skills />
        {/* <Carousel
          responsive={responsive}
          // infinite={true}
          className="skills__slider"
        >
          {skillsList.map((skill, index) => (
            <CircleProgressBar
              key={`${skill.skillName} ${index}`}
              className="skills__item"
              skillName={skill.skillName}
              inputPercentage={skill.inputPercentage}
            />
          ))}
        </Carousel> */}
        <section className="app__container__TEST_DIV">TEST</section>
      </main>
    </>
  );
}

export default App;

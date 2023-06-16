import { ArrowRightCircle } from "react-bootstrap-icons";
import "./_banner.scss";
import floatingAstronautImage from "../../assets/img/floating-chirag.png";
import rightArrow from "../../assets/img/rightArrow.svg";
import { useEffect, useState } from "react";
const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const wordsToRotate = ["Front End Developer", "Problem Solver"];
  const [wordToType, setWordToType] = useState("");
  const [timeToTransitionToNextLetter, settimeToTransitionToNextLetter] =
    useState(second);
  const timeToTransitionToNewWord = 2000;

  const tick = () => {
    let i = loopNum % wordsToRotate.length;
    let word = wordsToRotate[i];
    let updatedWord = isDeleting
      ? word.substring(0, word.length - 1)
      : word.substring(0, word.length);
    setWordToType(isDeleting
      ? word.substring(0, word.length - 1)
      : word.substring(0, word.length);)
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, timeToTransitionToNextLetter);

    return () => {
      clearInterval(ticker);
    };
  }, [wordToType]);

  return (
    <section className="banner">
      <div className="banner__container">
        <div className="banner__about-me">
          <div className="banner__about-me__welcome">Welcome! I am Chirag</div>
          <h1 className="banner__about-me__heading">
            {`I am a `}
            <span>Front End Developer</span>
          </h1>
          <p className="banner__about-me__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            officia aut molestiae non repellat beatae odio dolores impedit
            praesentium aspernatur unde repudiandae debitis omnis, vitae iure
            deserunt iusto animi eos.
          </p>
          <button className="banner__about-me__catch-up-button">
            <span>Lets connect over a cup of coffee</span>{" "}
            <img
              src={rightArrow}
              alt=""
              className="banner__about-me__catch-up-button__right-arrow"
            />
            {/* <ArrowRightCircle className="banner__about-me__catch-up-button__right-arrow" /> */}
          </button>
        </div>
        <div className="banner__floating-chirag">
          <img src={floatingAstronautImage} alt="Floating Astronaut Image" />
        </div>
      </div>
    </section>
  );
};

export default Banner;

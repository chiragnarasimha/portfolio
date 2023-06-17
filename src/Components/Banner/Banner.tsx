import "./_banner.scss";
import floatingAstronautImage from "../../assets/img/floating-chirag.png";
import rightArrow from "../../assets/img/rightArrow.svg";
import { useEffect, useState } from "react";
const Banner = () => {
  const wordsToRotate = ["Front End Developer", "Problem Solver"];
  const [indexOfWordToDisplay, setIndexOfWordToDisplay] = useState<number>(0);
  const [isDeletingLetter, setIsDeletingLetter] = useState<boolean>(false);
  const [wordToType, setWordToType] = useState<string>("");
  const [timeToTransitionToNextLetter, setTimeToTransitionToNextLetter] =
    useState<number>(300 - Math.random() * 100);
  const timeToTransitionToNewWord = 2000;

  const tick = () => {
    let word = wordsToRotate[indexOfWordToDisplay % wordsToRotate.length];
    let updatedWord = isDeletingLetter
      ? word.substring(0, wordToType.length - 1)
      : word.substring(0, wordToType.length + 1);
    setWordToType(updatedWord);

    /** Mimik a person deleting letters */
    if (isDeletingLetter) {
      setTimeToTransitionToNextLetter((prevTimeToTransitionToNextLetter) => {
        prevTimeToTransitionToNextLetter = Math.floor(
          prevTimeToTransitionToNextLetter / 2
        );
        return prevTimeToTransitionToNextLetter;
      });
    }

    if (!isDeletingLetter && updatedWord === word) {
      setIsDeletingLetter(true);
      setTimeToTransitionToNextLetter(timeToTransitionToNewWord);
    } else if (isDeletingLetter && updatedWord === ``) {
      setIsDeletingLetter(false);
      setIndexOfWordToDisplay(indexOfWordToDisplay + 1);
      setTimeToTransitionToNextLetter(200);
    }
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
            <span>{wordToType}</span>
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

import "./_banner.scss";
// import floatingAstronautImage from "../../assets/img/floating-chirag.png";
import floatingChiragOther from "../../assets/img/floating-chirag/floating-chirag-other-compressed.png";
import floatingChiragHeart from "../../assets/img/floating-chirag/floating-chirag-heart.png";
import floatingChiragMusic from "../../assets/img/floating-chirag/floating-chirag-music.png";
import floatingChiragChatBubble from "../../assets/img/floating-chirag/floating-chirag-chatBubble.png";
import floatingChiragChatWithDiamond from "../../assets/img/floating-chirag/floating-chirag-chatWithDiamond.png";
import { RightArrow } from "../../assets/img/ReactComponents/RightArrow";

import { useEffect, useState } from "react";
const Banner = () => {
  const wordsToRotate = ["Front End Developer", "Problem Solver"];
  const [indexOfWordToDisplay, setIndexOfWordToDisplay] = useState<number>(0);
  const [isDeletingLetter, setIsDeletingLetter] = useState<boolean>(false);
  const [wordToType, setWordToType] = useState<string>("");
  const [timeToTransitionToNextLetter, setTimeToTransitionToNextLetter] =
    useState<number>(300 - Math.random() * 100);
  const timeToTransitionToNewWord = 700;

  const tick = () => {
    const word = wordsToRotate[indexOfWordToDisplay % wordsToRotate.length];
    const updatedWord = isDeletingLetter
      ? word.substring(0, wordToType.length - 1)
      : word.substring(0, wordToType.length + 1);
    setWordToType(updatedWord);

    /** Mimik a person deleting letters */
    if (isDeletingLetter) {
      if (timeToTransitionToNextLetter > 100)
        setTimeToTransitionToNextLetter(
          (prevTimeToTransitionToNextLetter) =>
            prevTimeToTransitionToNextLetter - 100
        );
    }

    if (!isDeletingLetter && updatedWord === word) {
      setIsDeletingLetter(true);
      setTimeToTransitionToNextLetter(timeToTransitionToNewWord);
    } else if (isDeletingLetter && updatedWord === ``) {
      setIsDeletingLetter(false);
      setIndexOfWordToDisplay(indexOfWordToDisplay + 1);
      setTimeToTransitionToNextLetter(150);
    }
  };

  useEffect(() => {
    const ticker = setInterval(() => {
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
            <span>Let's get coffee </span>{" "}
            {/* <img
              src={RightArrow}
              alt=""
              className="banner__about-me__catch-up-button__right-arrow"
            /> */}
            <RightArrow className="banner__about-me__catch-up-button__right-arrow" />
            {/* <ArrowRightCircle className="banner__about-me__catch-up-button__right-arrow" /> */}
          </button>
        </div>
        <div className="banner__floating-chirag">
          <img
            src={floatingChiragOther}
            alt="Floating Astronaut Image"
            className="banner__floating-chirag__other"
          />
          <img
            src={floatingChiragHeart}
            alt="Floating Astronaut Image"
            className="banner__floating-chirag__heart"
          />
          <img
            src={floatingChiragMusic}
            alt="Floating Astronaut Image"
            className="banner__floating-chirag__music"
          />
          <img
            src={floatingChiragChatBubble}
            alt="Floating Astronaut Image"
            className="banner__floating-chirag__chat-bubble"
          />
          <img
            src={floatingChiragChatWithDiamond}
            alt="Floating Astronaut Image"
            className="banner__floating-chirag__chat-with-diamond"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

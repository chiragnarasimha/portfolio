import "./_banner.scss";
// import floatingAstronautImage from "../../assets/img/floating-chirag.png";
// import floatingChiragOther from "../../assets/img/floating-chirag/floating-chirag-other-compressed.png";
// import floatingChiragHeart from "../../assets/img/floating-chirag/floating-chirag-heart.png";
// import floatingChiragMusic from "../../assets/img/floating-chirag/floating-chirag-music.png";
// import floatingChiragChatBubble from "../../assets/img/floating-chirag/floating-chirag-chatBubble.png";
// import floatingChiragChatWithDiamond from "../../assets/img/floating-chirag/floating-chirag-chatWithDiamond.png";
import floatingChiragOriginal from "../../assets/img/floating-chirag/floating-chirag-original-compressed.png";

import { RightArrow } from "../../assets/img/ReactComponents/RightArrow";

import { useEffect, useState } from "react";
const Banner = () => {
  /** This is how to animate the greeting message */
  const letters =
    "!@#$%^&*(),./\\[]|{}-_=+`1234567890abcdefghijklmnopqrstuvwxyz";
  const [greetingsIterator, setGreetingsIterator] = useState(0);
  const [greetings, setGreetings] = useState("");

  const fullGreetingMessage = "Welcome! I am Chirag";
  const fullGreetingMessageLength = fullGreetingMessage.length;
  const decryptionAnimationSpeed = 0.4;
  const tick2 = () => {
    const updatedWord = fullGreetingMessage
      .split("")
      .map((letter, index) => {
        if (index < greetingsIterator) {
          return letter;
        }

        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");
    if (greetingsIterator >= fullGreetingMessageLength) {
      setGreetingsIterator(0);
    } else {
      if (greetingsIterator < 1) {
        setGreetingsIterator(1);
      }
      setGreetingsIterator(
        (prevGreetingsIterator) =>
          prevGreetingsIterator + decryptionAnimationSpeed
      );
      // Guard Clause to ensure that, once the last letter has been typed, there is no more calls to this function
      if (
        greetingsIterator > fullGreetingMessageLength - 1 &&
        greetingsIterator <= fullGreetingMessageLength
      ) {
        setGreetingsIterator(fullGreetingMessageLength + 1);
      }
    }
    setGreetings(updatedWord);
  };

  useEffect(() => {
    // This if statement will ensure that there is no infinite setInterval calls
    if (greetingsIterator <= fullGreetingMessageLength) {
      const iterator = setInterval(() => {
        tick2();
      }, 70);
      return () => {
        clearInterval(iterator);
      };
    }
  }, [greetings]);

  /** This is how to emulate typing */
  const wordsToRotate = [
    "PROBLEM SOLVER",
    "SOFTWARE ENGINEER",
    "FRONT END DEVELOPER",
  ];
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
      if (timeToTransitionToNextLetter > 50)
        setTimeToTransitionToNextLetter(
          (prevTimeToTransitionToNextLetter) =>
            prevTimeToTransitionToNextLetter / 2
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
    <section className="banner" id="home">
      <div className="banner__container">
        <div className="banner__about-me">
          <div className="banner__about-me__welcome">{greetings}</div>
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
            <RightArrow className="banner__about-me__catch-up-button__right-arrow" />
          </button>
        </div>
        <div className="banner__floating-chirag">
          {/* 
          // TODO: This is a future enhancement. Animate each individual asses, instead of the whole image.  
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
          /> */}

          <img
            src={floatingChiragOriginal}
            alt="Floating Astronaut Image"
            className="banner__floating-chirag__original"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

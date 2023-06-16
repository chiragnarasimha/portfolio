import { ArrowRightCircle } from "react-bootstrap-icons";
import "./_banner.scss";
import floatingAstronautImage from "../../assets/img/floating-astronaut.svg";
const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__container">
        <div className="banner__about-me">
          <div className="banner__about-me__welcome">Welcome! I am Chirag.</div>
          <h1>
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
            <span>Lets connect over a cup of coffee</span> <ArrowRightCircle />
          </button>
        </div>
        <div className="banner__floating-astronaut">
          <img src={floatingAstronautImage} alt="Floating Astronaut Image" />
        </div>
      </div>
    </section>
  );
};

export default Banner;

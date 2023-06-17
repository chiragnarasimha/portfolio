import { RefObject, useEffect, useRef } from "react";
import "./_progressBar.scss";

interface InputProps {
  inputPercentage: number;
}

const ProgressBar = ({ inputPercentage }: InputProps) => {
  const percentage = 30;
  //   const circle = document.getElementById("circle");
  const circleRef = useRef<SVGCircleElement | null>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  const input = document.getElementById("percent");
  const number = document.querySelector(".card__number");
  const tooltip = document.querySelector(".tooltip");

  //   function circlePercent(input: number) {
  //     let change = 565.49 - (565.49 * inputPercentage) / 100;
  //     circleRef.current.style.strokeDashoffset = `${change}`;
  //   }

  //   useEffect(() => {
  //     if (circleRef.current !== null) {
  //       circleRef.current.style.fill = `${
  //         565.49 - (565.49 * inputPercentage) / 100
  //       }`;
  //     }
  //   }, []);

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.style.fill = "blue"; // Change the fill color here
    }
  }, []);

  function changePercent() {
    if (input.value > 100) {
      tooltip.style.opacity = 1;
      tooltip.classList.add("fade-in");
      input.value = "";
    } else {
      tooltip.style.opacity = 0;
      tooltip.classList.remove("fade-in");
      number.innerHTML = Number(input.value) + "%";
      circlePercent();
      input.value = "";
    }
  }
  return (
    <div className="progress-bar">
      <div className="card">
        <div className="card__percent">
          <svg>
            <defs>
              <linearGradient id="progress-bar__gradient">
                <stop offset="0%" stop-color="#ec537f" />
                <stop offset="30%" stop-color="#ed7899" />
                <stop offset="100%" stop-color="#f0ca9e" />
              </linearGradient>
            </defs>
            <circle
              cx="90"
              cy="90"
              r="90"
              stroke="url(#progress-bar__gradient)"
              id="progress-bar__circle"
              ref={circleRef}
            />
          </svg>
          <div className="circle"></div>
          <div className="circle circle__medium"></div>
          <div className="circle circle__small"></div>
          <div className="card__number" ref={numberRef}>
            30%
          </div>
        </div>
        <div className="card__description">
          <h2>Card Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            cumque vitae iure voluptatem alias sed facilis quidem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

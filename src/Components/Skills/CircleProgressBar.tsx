import "./_circleProgressBar.scss"; // Import corresponding CSS file if needed
import { useEffect, useRef } from "react";
interface InputProps {
  className: string;
  skillName: string;
  inputPercentage: number;
}
const CircleProgressBar = ({
  className,
  skillName,
  inputPercentage,
}: InputProps) => {
  const circleRef = useRef<SVGCircleElement | null>(null);
  const numberRef = useRef<HTMLDivElement | null>(null);
  const changePercentage = (percentage: number) => {
    if (circleRef.current && numberRef.current) {
      const change = 565.49 - (565.49 * percentage) / 100;
      circleRef.current.style.strokeDashoffset = change.toString();
      numberRef.current.innerHTML = `${percentage}%`;
    }
  };
  useEffect(() => {
    changePercentage(inputPercentage);
  }, [inputPercentage]);

  return (
    <div className={className}>
      <div className="circle-progress-bar__container">
        <div className="circle-progress-bar__container__percent">
          <svg className="circle-progress-bar__svg">
            <defs>
              <linearGradient id="circle-progress-bar__gradient">
                <stop offset="0%" stopColor="#ec537f" />
                <stop offset="50%" stopColor="#ed7899" />
                <stop offset="100%" stopColor="#f0ca9e" />
              </linearGradient>
            </defs>
            <circle
              cx="90"
              cy="90"
              r="90"
              stroke="url(#circle-progress-bar__gradient)"
              id="circle"
              className="circle-progress-bar__circle__progress-percentage-fill"
              ref={circleRef}
            />
          </svg>
          <div className="circle-progress-bar__circle"></div>
          <div className="circle-progress-bar__circle circle-progress-bar__circle__medium"></div>
          <div className="circle-progress-bar__circle circle-progress-bar__circle__small"></div>
          <div
            className="circle-progress-bar__container__number"
            ref={numberRef}
          >
            50%
          </div>
        </div>
        <div className="circle-progress-bar__container__description">
          <h2>{skillName}</h2>
        </div>
      </div>
    </div>
  );
};

export default CircleProgressBar;

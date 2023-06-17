import CircleProgressBar from "./CircleProgressBar";
import ProgressBar from "./ProgressBar";
import "./_skills.scss";

const Skills = () => {
  return (
    <section id="skills">
      {/* <ProgressBar inputPercentage={35} /> */}
      <CircleProgressBar skillName={`JavaScript`} inputPercentage={80} />
      <CircleProgressBar skillName={`TypeScript`} inputPercentage={80} />
      <CircleProgressBar skillName={`React`} inputPercentage={70} />
      <CircleProgressBar skillName={`Shell Scripts`} inputPercentage={75} />
      <CircleProgressBar skillName={`Python`} inputPercentage={30} />
    </section>
  );
};

export default Skills;

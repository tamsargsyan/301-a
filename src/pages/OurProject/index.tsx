import Background from "../../components/Background";
import Header from "../../components/Header";
import PATTERN from "../../assets/patterns/side-2.svg";
import ICON from "../../assets/info/4.svg";
import "./index.css";
import Project from "../../components/Project";

const OurProjects = () => {
  return (
    <Background
      pattern1={PATTERN}
      style={{ padding: 0, flexDirection: "column" }}
      sidePatter2Style={{ display: "none" }}>
      <div className='filteringWrapper'>
        <Header
          h1='НАШИ ПРОЕКТЫ'
          p={[
            "За несколько лет работы фонда «301. Земля мудрости» мы запустили ряд важных проектов по направлениям образования, культуры, науки и инноваций и целостного развития территории. ",
          ]}
          icon={ICON}
        />
        <div className='filteringBtnsWrapper'>
          <button className=''>Project Ideas we offer</button>
          <button className=''>Projects we fundraise</button>
          <button className=''>Projects we Launched</button>
        </div>
      </div>
      <Project />
    </Background>
  );
};

export default OurProjects;

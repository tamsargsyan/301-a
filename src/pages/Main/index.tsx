import Background from "../../components/Background";
import Header from "../../components/Header";
import SIDE_PATTERN from "../../assets/patterns/side-1.svg";
import SIDE_PATTERN_MOBILE from "../../assets/patterns/side-1-mobile.svg";
import SMALL_PATTERN from "../../assets/patterns/small-1.svg";
import BIG_PATTERN from "../../assets/patterns/big-1.svg";
import LOGO from "../../assets/301.png";
import LOGO_MOBILE from "../../assets/301-mobile.png";
import "./index.css";
import FollowUs from "../../components/FollowUs";
import { useWindowSize } from "../../hooks/useWindowSize";

const Main = () => {
  const windowSize = useWindowSize();
  return (
    <Background
      pattern1={windowSize.width < 975 ? SIDE_PATTERN_MOBILE : SIDE_PATTERN}
      pattern2={SMALL_PATTERN}
      pattern3={BIG_PATTERN}
      style={{
        marginBottom: "50px",
        flexDirection: windowSize.width < 975 ? "column" : "row",
        padding: "70px 0",
      }}
      bigPatternStyle={{
        display: windowSize.width < 975 ? "none" : "block",
      }}>
      {windowSize.width < 975 && (
        <div className='bgLogo'>
          <img src={BIG_PATTERN} className='mainBigPattern' alt='Pattern' />
          <img src={LOGO_MOBILE} alt='301' className='logoMobile' />
        </div>
      )}
      <Header
        h1='ЗЕМЛЯ МУДРОСТИ'
        icon={""}
        p={[
          "Изменение сценария будущего Армении путем создания онтологической безопасности.",
          "В центре нашего внимания Армения — земля многовековой культуры и мудрости, которой есть что предложить миру."
        ]}
        btns={["Стань одним из 301", "Весь проект"]}
        btnStyles={[
          {
            background: "#DD264E",
            color: "#fff",
            border: "none",
          },
          {
            border: "2px solid #151C26",
            background: "rgba(255, 255, 255, 0.12)",
          },
        ]}
        style={{ padding: 0, width: "40vw" }}
      />
      {windowSize.width > 975 && (
        <div className='bgLogo'>
          <img src={LOGO} alt='301' />
        </div>
      )}
      <FollowUs className='mainFollowUs' />
    </Background>
  );
};

export default Main;

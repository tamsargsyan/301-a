import { ReactNode } from "react";
import "./index.css";
import { useWindowSize } from "../../hooks/useWindowSize";

interface BgProps {
  children: ReactNode;
  pattern1?: string;
  pattern2?: string;
  pattern3?: string;
  style?: Object;
  pattern2LeftStyle?: Object;
  pattern2RightStyle?: Object;
  bigPatternStyle?: Object;
  sidePatter1Style?: Object;
  sidePatter2Style?: Object;
}

const Background: React.FC<BgProps> = ({
  pattern1,
  pattern2,
  pattern3,
  children,
  style,
  pattern2LeftStyle,
  pattern2RightStyle,
  bigPatternStyle,
  sidePatter1Style,
  sidePatter2Style,
}) => {
  const windowSize = useWindowSize();
  return (
    <div
      className='bgContainer'
      style={{
        padding:
          pattern1 && pattern2 && pattern3
            ? windowSize.width < 975
              ? "100px 0"
              : "150px 0"
            : "40px 0",
        ...style,
      }}>
      {pattern1 && (
        <div className='sidePattern1' style={sidePatter1Style}>
          <img src={pattern1} alt='Pattern' />
        </div>
      )}
      {pattern2 && (
        <div className='pattern1' style={pattern2LeftStyle}>
          <img src={pattern2} alt='Pattern' />
        </div>
      )}
      {pattern3 && (
        <div className='bigPattern' style={bigPatternStyle}>
          <img src={pattern3} alt='Pattern' />
        </div>
      )}
      {pattern2 && (
        <div className='pattern2' style={pattern2RightStyle}>
          <img src={pattern2} alt='Pattern' />
        </div>
      )}
      {pattern1 && (
        <div className='sidePattern2' style={sidePatter2Style}>
          <img src={pattern1} alt='Pattern' />
        </div>
      )}
      {children}
    </div>
  );
};

export default Background;

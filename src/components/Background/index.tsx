import { ReactNode } from "react";
import "./index.css";

interface BgProps {
  children: ReactNode;
  pattern1?: string;
  pattern2?: string;
  pattern3?: string;
  style?: Object;
  pattern2None?: boolean;
}

const Background: React.FC<BgProps> = ({
  pattern1,
  pattern2,
  pattern3,
  children,
  style,
  pattern2None,
}) => {
  return (
    <div
      className='bgContainer'
      style={{
        padding: pattern1 && pattern2 && pattern3 ? "150px 0" : "40px 0",
        ...style,
      }}>
      {(pattern1 || pattern2) && (
        <>
          <div className='sidePattern1'>
            <img src={pattern1} alt='Pattern' />
          </div>
          <div className={`${pattern2None && "onlyPattern1"} pattern1`}>
            <img src={pattern2} alt='Pattern' />
          </div>
          {pattern3 && (
            <div className='bigPattern'>
              <img src={pattern3} alt='Pattern' />
            </div>
          )}
          <div
            className='pattern2'
            style={{ display: pattern2None ? "none" : "block" }}>
            <img src={pattern2} alt='Pattern' />
          </div>
          <div className='sidePattern2'>
            <img src={pattern1} alt='Pattern' />
          </div>
        </>
      )}
      {children}
    </div>
  );
};

export default Background;

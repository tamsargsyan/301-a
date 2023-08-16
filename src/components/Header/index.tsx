import { useWindowSize } from "../../hooks/useWindowSize";
import Button from "../Button";
import "./index.css";

interface HeaderProps {
  h1: string;
  h2?: string;
  p?: string[];
  btns?: string[];
  style?: Object;
  btnStyles?: React.CSSProperties[];
  icon?: string;
  mainImg?: string;
  className?: string;
  isEcosystem?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  h1,
  h2,
  p,
  btns,
  icon,
  style,
  btnStyles,
  mainImg,
  className,
  isEcosystem,
}) => {
  const windowSize = useWindowSize();
  return (
    <div className={`${className} headerContainer`} style={style}>
      {windowSize.width < 975 ? (
        <div className={`${h2 && "iconTitleParagraph"} iconTitle`}>
          {icon && (
            <div className="headerIconWrapper">
              <img src={icon} alt="Icon" />
            </div>
          )}
          <div className="header">
            <span>{h1}</span>
            {h2 && <h2>{h2}</h2>}
          </div>
        </div>
      ) : (
        icon &&
        !isEcosystem && (
          <div className="icon">
            <img src={icon} alt="Icon" />
          </div>
        )
      )}
      <div className="headerContent">
        {windowSize.width > 975 && (
          <div className={`${isEcosystem && "header_ecosystem"} header`}>
            {isEcosystem && (
              <div className="ecosystemImg">
                <img src={icon} alt="Ecosystem" />
              </div>
            )}
            <h1>{h1}</h1>
            {h2 && <h2>{h2}</h2>}
          </div>
        )}
        {windowSize.width < 975 && mainImg && (
          <div className="mainImgHeader">
            <img src={mainImg} alt="Main" />
          </div>
        )}
        <div className="inner">
          {p?.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {btns && (
          <div className="btns">
            {btns.map((btnText, index) => (
              <Button
                key={index}
                text={btnText}
                style={btnStyles && btnStyles[index]}
                link={true}
                to=""
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

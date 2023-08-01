import Button from "../Button";
import "./index.css";

interface HeaderProps {
  h1: string;
  h2?: string;
  p?: string;
  btns?: string[];
  style?: Object;
  btnStyles?: React.CSSProperties[];
  icon: string;
}

const Header: React.FC<HeaderProps> = ({
  h1,
  h2,
  p,
  btns,
  icon,
  style,
  btnStyles,
}) => {
  return (
    <div className='headerContainer' style={style}>
      <div className='icon'>
        <img src={icon} alt='Icon' />
      </div>
      <div className='headerContent'>
        <div className='header'>
          <h1>{h1}</h1>
          {h2 && <h2>{h2}</h2>}
        </div>
        <div className='inner'>
          <p>{p}</p>
        </div>
        {btns && (
          <div className='btns'>
            {btns.map((btnText, index) => (
              <Button
                key={index}
                text={btnText}
                style={btnStyles && btnStyles[index]}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

import { NavLink, To } from "react-router-dom";
import "./index.css";
interface ButtonProps {
  text: string;
  style?: Object;
  active?: boolean;
  link: boolean;
  to: To;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  style,
  active,
  link,
  to,
  icon,
}) => {
  return (
    <>
      {link ? (
        <NavLink
          to={to}
          className={`${active && "activeBtn"} btn`}
          style={style}>
          {text}
        </NavLink>
      ) : (
        <button
          onClick={e => e.preventDefault()}
          className={`${active && "activeBtn"} btn`}
          style={style}>
          {text}
          {icon && <img className='btn_icon' src={icon} alt='Icon' />}
        </button>
      )}
    </>
  );
};

export default Button;

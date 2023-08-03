import "./index.css";

interface ButtonProps {
  text: string;
  style?: Object;
  active?: boolean;
  link: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, style, active, link }) => {
  return (
    <>
      {link ? (
        <a
          onClick={e => e.preventDefault()}
          href='/'
          className={`${active && "activeBtn"} btn`}
          style={style}>
          {text}
        </a>
      ) : (
        <button
          onClick={e => e.preventDefault()}
          className={`${active && "activeBtn"} btn`}
          style={style}>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;

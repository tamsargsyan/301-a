import "./index.css"

interface ButtonProps {
    text: string;
    style?: Object,
    active?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, style, active }) => {

    return (
        <a onClick={(e) => e.preventDefault()} href="/" className={`${active && "activeBtn"} btn`} style={style}>{text}</a>
    )
}

export default Button
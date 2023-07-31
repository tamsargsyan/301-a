// import ICON from "../../assets/info/1.svg"
import Button from "../Button"
import "./index.css"

interface HeaderProps {
    h1: string,
    h2?: string,
    p: string,
    btn: string | undefined,
    icon: string,
}

const Header: React.FC<HeaderProps> = ({ h1, h2, p, btn, icon }) => {

    return (
        <div className="headerContainer">
            <div className="icon">
                <img src={icon} alt="Icon" />
            </div>
            <div className="headerContent">
                <div className="header">
                    <h1>{h1}</h1>
                    {
                        h2 && <h2>{h2}</h2>
                    }
                </div>
                <div className="inner">
                    <p>{p}</p>
                </div>
                {btn && <Button text={btn} />}
            </div>
        </div>
    )
}

export default Header
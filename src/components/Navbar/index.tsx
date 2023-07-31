import LOGO from "../../assets/logo.svg"
import Button from "../Button"
import "./index.css"

const Navbar = () => {
    const menu = [
        {
            id: 1,
            name: "Home",
            link: "/"
        },
        {
            id: 2,
            name: "Projects",
            link: "/projects"
        },
        {
            id: 3,
            name: "Media",
            link: "/media"
        },
        {
            id: 4,
            name: "Calendar",
            link: "/calendar"
        },
        {
            id: 5,
            name: "About us",
            link: "/about"
        },
        {
            id: 5,
            name: "Contact",
            link: "/contact"
        }
    ]
    return (
        <div className="navbarContainer">
            <div className="logo">
                <img src={LOGO} alt="Logo" />
            </div>
            <div className="menu">
                <div className="link">
                    {
                        menu.map((link, i) => (
                            <a key={i} href={link.link}>{link.name}</a>
                        ))
                    }
                </div>
                <div className="lang">ENG</div>
            </div>
            <Button text="Sign In" />
        </div>
    )
}

export default Navbar
import { useState } from "react";
import LOGO from "../../assets/logo.svg";
import { useWindowSize } from "../../hooks/useWindowSize";
import Button from "../Button";
import "./index.css";

export const menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Projects",
    link: "/projects",
  },
  {
    id: 3,
    name: "Media",
    link: "/media",
  },
  {
    id: 4,
    name: "Calendar",
    link: "/calendar",
  },
  {
    id: 5,
    name: "About us",
    link: "/about",
  },
  {
    id: 6,
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const windowSize = useWindowSize();
  const [openMenu, setOpenMenu] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className='navbarContainer'>
      {windowSize.width < 975 && (
        <div className='mobileMenu'>
          <div
            className={`${openMenu && "openedHamburger"} hamburger`}
            onClick={() => setOpenMenu(!openMenu)}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
          {openMenu && (
            <div className='openedMobileMenu'>
              <div className='menu'>
                <div className='link'>
                  {menu.map((link, i) => (
                    <a
                      onClick={e => e.preventDefault()}
                      key={i}
                      href='#projects'
                      style={{ animationDelay: `${i * 0.1}s` }}>
                      {link.name}
                    </a>
                  ))}
                </div>
                <div className='link logout'>
                  <a href='/'>Log out</a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {openMenu ? (
        <div className='logo'>
          <span>Меню</span>
        </div>
      ) : (
        <button className='logo' onClick={scrollToTop}>
          <img src={LOGO} alt='Logo' />
        </button>
      )}
      <div className='menu'>
        <div className='link'>
          {menu.map((link, i) => (
            <a key={i} href='#projects'>
              {link.name}
            </a>
          ))}
        </div>
        <div className='lang'>ENG</div>
      </div>
      <Button text='Sign In' />
    </div>
  );
};

export default Navbar;

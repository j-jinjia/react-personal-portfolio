import { useState } from "react";
import menuIcon from "../../assets/images/menu-icon.png";
import blackCross from "../../assets/images/black-cross.png";
import "./Navigation.scss";

const Navigation = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleClickMenu = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <section className="navigation">
        <h1 className="navigation__logo">Jiazheng Jin Jia</h1>
        {!showNavbar && (
          <img
            className="navigation__menu"
            src={menuIcon}
            alt="menu icon"
            onClick={handleClickMenu}
          />
        )}
        {showNavbar && (
          <div className="menu-navbar">
            <img
              className="menu-navbar__cross"
              src={blackCross}
              alt="black cross"
              onClick={handleClickMenu}
            />
            <ul className="links" onClick={handleClickMenu}>
              <a href="#home" className="links__item">
                Home
              </a>
              <a href="#projects" className="links__item">
                Projects
              </a>
              <a href="#about" className="links__item">
                About
              </a>
              <a href="#contact" className="links__item">
                Get in Touch
              </a>
            </ul>
          </div>
        )}
        <ul className="links-desktop">
          <a href="#home" className="links-desktop--item">
            Home
          </a>
          <a href="#projects" className="links-desktop--item">
            Projects
          </a>
          <a href="#about" className="links-desktop--item">
            About
          </a>
          <a href="#contact" className="links-desktop--item">
            Contact
          </a>
        </ul>
      </section>
    </>
  );
};

export default Navigation;

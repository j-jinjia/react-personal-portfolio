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
          <img src={menuIcon} alt="menu icon" onClick={handleClickMenu} />
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
              <a href="#home" className="links__home">
                Home
              </a>
              <a href="#projects" className="links__projects">
                Projects
              </a>
              <a href="#about" className="links__about">
                About
              </a>
              <a href="#contact" className="links__contact">
                Get in Touch
              </a>
            </ul>
          </div>
        )}
      </section>
    </>
  );
};

export default Navigation;

import "./Footer.scss";
import { AiFillLinkedin } from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <p className="footer__text">© Jiazheng Jin Jia 2022</p>
        <div className="footer__links">
          <a
            className="item"
            href="https://www.linkedin.com/in/jiazheng-jin-jia/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            className="item"
            href="https://github.com/j-jinjia"
            target="_blank"
            rel="noreferrer"
          >
            <GoMarkGithub />
          </a>
        </div>
      </section>
    </>
  );
};

export default Footer;

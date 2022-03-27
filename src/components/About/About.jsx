import "./About.scss";
const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="about__heading">About</h2>
      <br />
      <p className="about__paragraph">
        Hey there! I'm Jia Zheng, a junior full-stack software developer with
        background in astrophysics!. I have a passion for problem solving,
        learning day by day and creating solutions along the way. I started
        getting into coding at university, when I did my computer programming
        modules in Python, although back then I saw it more as an obligation
        rather than a passion. After deciding to give coding another try, I
        found it very exciting and through _nology I was able to learn a lot
        while building my interest up!
        <br />
        <br />
        During this 12-week coding bootcamp at _nology, I've learnt lots of
        different technologies and methodologies which includes HTML5, CSS3,
        SASS, JavaScript, React, Jest, Cypress, Enzyme, Github Actions, TTD,
        GCP, CI/CD, OOP, Java, Spring, and SQL. Now, I'm looking for an
        oportunity in the tech industry to apply my knowledge and keep growing
        as a developer!
      </p>
      <br />
      <br />
      <h4 className="about__subheading">Interests</h4>
      <br />
      <ul className="links">
        <li className="links__items">Full Stack Development</li>
        <li className="links__items">Software Engineering</li>
        <li className="links__items">Web Development</li>
      </ul>
      <br />
      <h4 className="about__subheading">Education</h4>
      <br />
      <ul className="links">
        <li className="links__items">
          BSc Physics with Astrophysics at University of Leeds(UK)
        </li>
      </ul>
    </section>
  );
};

export default About;

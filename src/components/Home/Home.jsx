import "./Home.scss";
import Button from "../Button/Button";
const Home = () => {
  return (
    <section id="home" className="home">
      <h1 className="home__heading">Hello there!</h1>
      <h3 className="home__subheading">
        I'm Jiazheng, a Full-Stack Junior Software Developer
      </h3>
      <p className="home__paragraph">Let me show you my work!</p>
      <Button label="home__button" title="View My Work" link="#projects" />
    </section>
  );
};

export default Home;

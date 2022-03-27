import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navigation />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

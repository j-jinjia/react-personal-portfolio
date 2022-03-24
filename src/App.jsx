import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
// TO do :
/* 

add navbar links without navmenu
change favicon 
create footer component*/
const App = () => {
  return (
    <>
      <Navigation />
      <Home />
      <Projects />
      <About />
      <Contact />
    </>
  );
};

export default App;

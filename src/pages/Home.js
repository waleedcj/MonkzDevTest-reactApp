import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cover from "../pages/Cover";
//import AnimatedCursor from "react-animated-cursor";
import About from "../pages/About";
import "../js/common";
import Specs from "../pages/Specs";
import Factions from "../pages/Factions";
import { ParallaxProvider } from "react-scroll-parallax";
import Manifest from "../pages/Manifest";
import Ascension from "../pages/Ascension";
import Team from "../pages/Team";
import Advisory from "../pages/Advisory";
import Roadmap from "../pages/Roadmap";
import Socials from "../pages/Socials";

const Home = () => {
  return (
    <div>
      <Cover />
      <About />
      <Specs />
      <ParallaxProvider>
        <Factions />
      </ParallaxProvider>
      <Manifest />
      <Ascension />
      <Team />
      <Advisory />
      <Roadmap />
      <Socials />
    </div>
  );
};

export default Home;

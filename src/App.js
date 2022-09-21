//import "./css/libs.css";
import "./css/style.css";
import Home from "./pages/Home";
import Pages from "./pages/Pages";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Cover from "./pages/Cover";
//import AnimatedCursor from "react-animated-cursor";
import Cursor from "./components/Cursor";
import About from "./pages/About";
import "./js/common";
import Meta from "./pages/Meta";
import Specs from "./pages/Specs";
import Factions from "./pages/Factions";
import "./js/common";
import { ParallaxProvider } from "react-scroll-parallax";
import Manifest from "./pages/Manifest";
import Ascension from "./pages/Ascension";
import Team from "./pages/Team";
import Advisory from "./pages/Advisory";
import Roadmap from "./pages/Roadmap";
import Socials from "./pages/Socials";

function App() {
  return (
    <div>
      <Cursor />
      <Meta />
      <body className="body">
        <Header />
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
      </body>
    </div>
  );
}

export default App;

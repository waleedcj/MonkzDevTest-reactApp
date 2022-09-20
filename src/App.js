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
      </body>
    </div>
  );
}

export default App;

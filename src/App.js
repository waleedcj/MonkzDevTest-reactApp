import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/style.css";
import Pages from "./pages/Pages";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import "bootstrap/dist/css/bootstrap.min.css";
import Cover from "./pages/Cover";
//import AnimatedCursor from "react-animated-cursor";
import Cursor from "./components/Cursor";
import About from "./pages/About";
import "./js/common";
import Meta from "./pages/Meta";
import Specs from "./pages/Specs";
import Factions from "./pages/Factions";
import { ParallaxProvider } from "react-scroll-parallax";
import Manifest from "./pages/Manifest";
import Ascension from "./pages/Ascension";
import Team from "./pages/Team";
import Advisory from "./pages/Advisory";
import Roadmap from "./pages/Roadmap";
import Socials from "./pages/Socials";
import Education from "./pages/Education";
import Blog from "./pages/Blog";
import Shuhari from "./pages/Shuhari";
import Chi from "./pages/Chi";
import Coursedetails from "./pages/Coursedetails";
import Article from "./pages/Article";
import Lecture1 from "./pages/Lecture1";
import Swap from "./pages/Swap";
import Characters from "./pages/Characters";
import Items from "./pages/Items";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Cursor />
        <Meta />
        <body className="body">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Pages" element={<Pages />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/shuhari" element={<Shuhari />} />
            <Route path="/chi" element={<Chi />} />
            <Route path="/courseDetails" element={<Coursedetails />} />
            <Route path="/article" element={<Article />} />
            <Route path="/courseLecture" element={<Lecture1 />} />
            <Route path="/modalChoose" element={<Swap />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/items" element={<Items />} />
          </Routes>
        </body>
      </div>
    </Router>
  );
}

export default App;

import "./CSS Files/App.css";
// import { NavBar } from "./components/NavBar";
// import Navbar2 from "./components/Navbar2";
import Navbar3 from "./components/Navbar3";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    // <div className='App'>
    <div className='text-2xl font-bold'>
      {/* <NavBar /> */}
      {/* <Navbar2 /> */}
      <Router>
        <Navbar3 />
      </Router>
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import MyCV from "./components/MyCV";
import Navbar from "./components/Navbar";
import MainProjects from "./components/MainProjects";
import { useRef } from "react";
import Gallery from "./components/Gallery";
import SmallerProjects from "./components/SmallerProjects";
import Contact from "./components/Contact";

function App() {
  const mainProjectsRef = useRef<null | HTMLHeadingElement>(null);
  const cvRef = useRef<null | HTMLHeadingElement>(null);
  const smallerProjectsRef = useRef<null | HTMLHeadingElement>(null);
  const galleryRef = useRef<null | HTMLHeadingElement>(null);
  const contactRef = useRef<null | HTMLHeadingElement>(null);

  function scrollToMainProjects() {
    if (mainProjectsRef.current !== null) {
      mainProjectsRef.current.scrollIntoView();
      window.scroll(0, window.scrollY + -150);
    }
  }
  function scrollToCV() {
    if (cvRef.current !== null) {
      cvRef.current.scrollIntoView();
      window.scroll(0, window.scrollY + -150);
    }
  }
  function scrollToSmallerProjects() {
    if (smallerProjectsRef.current !== null) {
      smallerProjectsRef.current.scrollIntoView();
      window.scroll(0, window.scrollY + -150);
    }
  }
  function scrollToGallery() {
    if (galleryRef.current !== null) {
      galleryRef.current.scrollIntoView();
      window.scroll(0, window.scrollY + -150);
    }
  }
  function scrollToContact() {
    if (contactRef.current !== null) {
      //scroll to bottom
      window.scrollTo(0, document.body.scrollHeight);
    }
  }

  return (
    <>
      <div className="portfolio">
        <div className="navbar-container">
          <Navbar
            scrollToMainProjects={scrollToMainProjects}
            scrollToCV={scrollToCV}
            scrollToSmallerProjects={scrollToSmallerProjects}
            scrollToGallery={scrollToGallery}
            scrollToContact={scrollToContact}
          />
        </div>
        <div className="placeholder"></div>
        <h1 ref={mainProjectsRef} className="portfolio-header">
          Zrealizowane Projekty
        </h1>
        <MainProjects />
        <h1 ref={cvRef} className="portfolio-header">
          CV
        </h1>
        <MyCV />
        <h1 ref={smallerProjectsRef} className="portfolio-header">
          Mniejsze Projekty
        </h1>
        <SmallerProjects />
        <h1 ref={galleryRef} className="portfolio-header">
          Galeria
        </h1>
        <Gallery />
        <h1 ref={contactRef} className="portfolio-header">
          Kontakt
        </h1>
        <Contact />
      </div>
    </>
  );
}

export default App;

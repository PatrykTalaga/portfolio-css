import "./App.css";
import MyCV from "./components/MyCV";
import Navbar from "./components/Navbar";
import { useRef, useState } from "react";
import Gallery from "./components/Gallery";
import SmallerProjects from "./components/SmallerProjects";
import Contact from "./components/Contact";
import MainProjects3D from "./components/MainProjects3D";
/* import MainProjects from "./components/MainProjects"; */

function App() {
  const mainProjectsRef = useRef<null | HTMLHeadingElement>(null);
  const cvRef = useRef<null | HTMLHeadingElement>(null);
  const smallerProjectsRef = useRef<null | HTMLHeadingElement>(null);
  const galleryRef = useRef<null | HTMLHeadingElement>(null);
  const contactRef = useRef<null | HTMLHeadingElement>(null);
  const [mainProjectsHide, setMainProjectsHide] = useState(false);
  const [cVHide, setCVHide] = useState(false);
  const [smallerProjectsHide, setSmallerProjectsHide] = useState(false);
  const [galleryHide, setGalleryHide] = useState(false);
  const [contactHide, setContactHide] = useState(false);

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
        {/* keeps space for navbar */}
        {/* **************************** */}

        <div className="header-container">
          <h1 ref={mainProjectsRef} className="portfolio-header">
            Zrealizowane Projekty
          </h1>
          <button
            className={`${mainProjectsHide ? "rotate-180" : ""}`}
            onClick={() => setMainProjectsHide(!mainProjectsHide)}
          >
            ^
          </button>
          <p>{`${mainProjectsHide ? "Rozwiń" : "Zwiń"}`}</p>
        </div>
        <div
          className={`container-100 ${mainProjectsHide ? "display-none" : ""}`}
        >
          <MainProjects3D />
        </div>

        {/* **************************** */}
        <div className="header-container">
          <h1 ref={cvRef} className="portfolio-header">
            CV
          </h1>
          <button
            className={`${cVHide ? "rotate-180" : ""}`}
            onClick={() => setCVHide(!cVHide)}
          >
            ^
          </button>
          <p>{`${cVHide ? "Rozwiń" : "Zwiń"}`}</p>
        </div>
        <div className={`container-100 ${cVHide ? "display-none" : ""}`}>
          <MyCV />
        </div>
        {/* **************************** */}
        <div className="header-container">
          <h1 ref={smallerProjectsRef} className="portfolio-header">
            Mniejsze Projekty
          </h1>
          <button
            className={`${smallerProjectsHide ? "rotate-180" : ""}`}
            onClick={() => setSmallerProjectsHide(!smallerProjectsHide)}
          >
            ^
          </button>
          <p>{`${smallerProjectsHide ? "Rozwiń" : "Zwiń"}`}</p>
        </div>
        <div
          className={`container-100 ${
            smallerProjectsHide ? "display-none" : ""
          }`}
        >
          <SmallerProjects />
        </div>
        {/* **************************** */}
        <div className="header-container">
          <h1 ref={galleryRef} className="portfolio-header">
            Galeria
          </h1>
          <button
            className={`${galleryHide ? "rotate-180" : ""}`}
            onClick={() => setGalleryHide(!galleryHide)}
          >
            ^
          </button>
          <p>{`${galleryHide ? "Rozwiń" : "Zwiń"}`}</p>
        </div>
        <div className={`container-100 ${galleryHide ? "display-none" : ""}`}>
          <Gallery />
        </div>
        {/* **************************** */}
        <div className="header-container">
          <h1 ref={contactRef} className="portfolio-header">
            Kontakt
          </h1>
          <button
            className={`${contactHide ? "rotate-180" : ""}`}
            onClick={() => setContactHide(!contactHide)}
          >
            ^
          </button>
          <p>{`${contactHide ? "Rozwiń" : "Zwiń"}`}</p>
        </div>
        <div className={`container-100 ${contactHide ? "display-none" : ""}`}>
          <Contact />
        </div>
        {/* **************************** */}
      </div>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import "../App.css";
import "./navbar.css";

type PropsType = {
  scrollToMainProjects: () => void;
  scrollToCV: () => void;
  scrollToSmallerProjects: () => void;
  scrollToGallery: () => void;
  scrollToContact: () => void;
};
export default function Navbar({
  scrollToMainProjects,
  scrollToCV,
  scrollToSmallerProjects,
  scrollToGallery,
  scrollToContact,
}: PropsType) {
  //could be done with just prevScrolled, but it's more readeable this way
  const [isScrolledDown, setisScrolledDown] = useState(false);
  const [prevScrolled, setprevScrolled] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (prevScrolled - window.scrollY < 0) {
        setisScrolledDown(true);
      } else {
        setisScrolledDown(false);
      }
      /* console.log({
        now: window.scrollY,
        prev: prevScrolled,
        diff: `${prevScrolled - window.scrollY}`,
      }); */
      setprevScrolled(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrolled]);

  return (
    <nav
      className={`navbar ${isScrolledDown ? "hidden" : ""}`}
      id="main-navbar"
    >
      <button onClick={scrollToMainProjects}>Projekty</button>
      <button onClick={scrollToCV}>CV</button>
      <button onClick={scrollToSmallerProjects}>Mniejsze Projekty</button>
      <button onClick={scrollToGallery}>Galeria</button>
      <button onClick={scrollToContact}>Kontakt</button>
    </nav>
  );
}

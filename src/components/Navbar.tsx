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
  return (
    <nav className="navbar">
      <button onClick={scrollToMainProjects}>Projekty</button>
      <button onClick={scrollToCV}>CV</button>
      <button onClick={scrollToSmallerProjects}>Mniejsze Projekty</button>
      <button onClick={scrollToGallery}>Galeria</button>
      <button onClick={scrollToContact}>Kontakt</button>
    </nav>
  );
}

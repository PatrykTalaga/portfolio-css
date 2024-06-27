import "./mainProjects.css";
import "./rotarySlider.css";

import projects from "../assets/projects";
import { useEffect, useRef, useState } from "react";

export default function MainProjects3D() {
  const [currentRotation, setCurrentRotation] = useState(0);
  const rotateRef = useRef<HTMLDivElement>(null); // Ref to hold the rotatable element

  const handleClickLeft = () => {
    const quantity = 6;
    const targetRotation = currentRotation + 360 / quantity; // Calculate new rotation
    setCurrentRotation(targetRotation);
  };
  const handleClickRight = () => {
    const quantity = 6;
    const targetRotation = currentRotation - 360 / quantity; // Calculate new rotation
    setCurrentRotation(targetRotation);
  };

  useEffect(() => {
    if (rotateRef.current) {
      rotateRef.current.style.transform = `perspective(1000px) rotateY(${currentRotation}deg)`;
    }
  }, [currentRotation]); // Update style on currentRotation change

  return (
    <div className="banner">
      <div
        className={`main-projects slider rotatable-container`}
        ref={rotateRef}
        style={{ "--quantity": 6 } as React.CSSProperties}
      >
        {projects.map((project, index) => (
          <div
            className="item"
            style={{ "--position": `${index + 1}` } as React.CSSProperties}
            key={project.title}
          >
            {/* <div className="card"> */}
            <h1 className="text-2xl">{project.title}</h1>
            <div className="video-containter">
              <iframe
                width="95%"
                height="100%"
                src={`https://www.youtube.com/embed/${project.embedId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                className="yt-embed"
              />
            </div>
            {project.tools !== "" && (
              <p className="subtitle">
                <b>{project.tools}</b>
              </p>
            )}
            <p>{project.text}</p>
            <a href={project.github}>
              <b>Github: {project.github}</b>
            </a>
          </div>
          /*  </div> */
        ))}
      </div>
      <button className="rightButton" onClick={handleClickLeft}>
        {`< Poprzedni`}
      </button>
      <button className="rightButton" onClick={handleClickRight}>
        {`Następny >`}
      </button>
    </div>
  );
}

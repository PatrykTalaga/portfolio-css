import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";

import projects from "../assets/projects";

export default function MainProjects() {
  return (
    <div className="main-projects">
      <Swiper
        breakpoints={{
          340: { slidesPerView: 1, spaceBetween: 15 },
          700: { slidesPerView: 2, spaceBetween: 15 },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="main-projects-carousel"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title}>
            <div className="slide">
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
                <p>
                  <b>{project.tools}</b>
                </p>
              )}
              <p>{project.text}</p>
              <a href={project.github}>
                <b>Github: {project.github}</b>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

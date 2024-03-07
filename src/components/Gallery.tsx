import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";

import photos from "../assets/photos";
import { useState } from "react";

export default function Gallery() {
  const [currentPhoto, setCurrentPhoto] = useState("");

  function openModal() {
    const dialog = document.querySelector("dialog");
    if (dialog) {
      dialog.showModal();
    }
  }

  function closeModal() {
    const dialog = document.querySelector("dialog");
    if (dialog) {
      dialog.close();
    }
  }
  return (
    <div className="gallery">
      <dialog className="modal-image" open onClick={() => closeModal()}>
        <img src={currentPhoto} alt="Photo" />
      </dialog>

      <Swiper
        breakpoints={{
          340: { slidesPerView: 2, spaceBetween: 15 },
          700: { slidesPerView: 3, spaceBetween: 15 },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="gallery-carousel"
      >
        {photos.map((photo) => (
          <SwiperSlide key={photo}>
            <img
              src={photo}
              alt={`Slide ${photo}`}
              onClick={() => {
                setCurrentPhoto(photo);
                openModal();
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

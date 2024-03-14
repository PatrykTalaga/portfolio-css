import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { useState } from "react";
import photos from "../assets/photos";
import "./gallery.css";

export default function Gallery() {
  const [currentPhoto, setCurrentPhoto] = useState("");

  function openModal() {
    const dialog = document.getElementById(
      "gallery-dialog"
    ) as HTMLDialogElement;
    if (dialog) {
      dialog.close(); //figure out while it is open on mount...
      dialog.style.display = "flex";
      dialog.showModal();
    }
  }

  function closeModal() {
    const dialog = document.getElementById(
      "gallery-dialog"
    ) as HTMLDialogElement;
    if (dialog) {
      dialog.style.display = "none";
      dialog.close();
    }
  }
  return (
    <div className="gallery">
      <dialog id="gallery-dialog" className="modal-image">
        <img src={currentPhoto} alt="Photo" />
        <div className="x-overlay" onClick={() => closeModal()}>
          <b>X</b>
        </div>
      </dialog>

      <Swiper
        breakpoints={{
          480: { slidesPerView: 1, spaceBetween: 15 },
          920: { slidesPerView: 2, spaceBetween: 15 },
          1650: { slidesPerView: 3, spaceBetween: 15 },
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

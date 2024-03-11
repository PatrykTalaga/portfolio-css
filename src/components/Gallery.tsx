import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";

import photos from "../assets/photos";
import { useEffect, useRef, useState } from "react";

export default function Gallery() {
  const [currentPhoto, setCurrentPhoto] = useState("");
  const refGallery = useRef(null); //react strict mode opens dialog element
  useEffect(() => {
    const dialogGallery = refGallery.current;
    /*  dialogCalc.showModal(); */
    return () => dialogGallery.close();
  }, []);

  function openModal() {
    const dialog = document.getElementById(
      "gallery-dialog"
    ) as HTMLDialogElement;
    if (dialog) {
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
      <dialog ref={refGallery} id="gallery-dialog" className="modal-image" open>
        <img src={currentPhoto} alt="Photo" />
        <div className="x-overlay" onClick={() => closeModal()}>
          <b>X</b>
        </div>
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

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../styles/top-page/Gallery.css'

import img1 from '../../assets/images/top-page/gallery1.jpg';
import img2 from '../../assets/images/top-page/gallery2.jpg';
import img3 from '../../assets/images/top-page/gallery3.jpg';

const Gallery = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  return (
    <section className="gallery">
      <h2 className='gallery-title'>Gallery</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        className="gallery-swiper"
        style={{ paddingBottom: '40px' }} 
        breakpoints={{
          0: {
            slidesPerView: 1,
            centeredSlides: false,
          },
          751: {
            slidesPerView: 3,
            centeredSlides: true,
          }
        }}
        watchSlidesProgress={true}
        watchSlidesVisibility={true}
      >
        <SwiperSlide><img src={img1} alt="Gallery 1" className="gallery-img" onClick={() => openModal(img1)} /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="Gallery 2" className="gallery-img" onClick={() => openModal(img2)} /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="Gallery 3" className="gallery-img" onClick={() => openModal(img3)} /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="Gallery 1" className="gallery-img" onClick={() => openModal(img1)} /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="Gallery 2" className="gallery-img" onClick={() => openModal(img2)} /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="Gallery 3" className="gallery-img" onClick={() => openModal(img3)} /></SwiperSlide>
      </Swiper>

      {/* モーダル */}
      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <img
            src={modalImage}
            alt="拡大画像"
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;

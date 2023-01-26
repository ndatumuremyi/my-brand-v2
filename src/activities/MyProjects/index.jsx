import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import Projects from '../../system/data/projects';
import MainLayouts from '../../layouts/MainLayouts';

function MyProjects() {
  return (
    <MainLayouts>
      <div className="container-swiper">
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {
            Projects.map((project) => (
              <SwiperSlide
                onClick={() => {
                  window.location.href = project.url;
                }}
                key={project.title}
              >
                <img src={project.image} alt={project.title} />
              </SwiperSlide>
            ))
          }

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline" />
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline" />
            </div>
            <div className="swiper-pagination" />
          </div>
        </Swiper>
      </div>
    </MainLayouts>

  );
}

export default MyProjects;

import React from 'react';
import TopNav from '../TopNav';

function HeaderLanding() {
  return (
    <header className="bg-brand_bold text-white flex flex-col header">
      <TopNav />
      <div
        id="my_bland"
        className="flex justify-evenly items-center h-full my_bland -md:pt-20"
      >
        <div
          className="header_content flex flex-col justify-between items-center mt-14"
        >
          <h5 className="text-second text-5xl font-bold tracking-wider">
            FullStack
            {' '}
            <br />
            Developer.
          </h5>
          <p className="text-white-light px-5">
            I like to craft solid and scalable frontend
            {' '}
            <br />
            products with great user experiences.
          </p>
          <button type="button" className="button_light">Resume</button>
        </div>
        <div id="brand_image_div" className="brand_image_div mt-12">
          <img
            className="brand_image"
            src="/assets/images/brand_image.jpg"
            alt=""
          />
          <img
            className="zig_zag_left"
            src="/assets/images/zigizaga_colored.svg"
            alt=""
          />
          <img
            className="zig_zag_right"
            src="/assets/images/zigizaga_colored.svg"
            alt=""
          />
          <img
            className="zig_zad_center"
            src="/assets/images/zigizaga_white.svg"
            alt=""
          />
        </div>
      </div>
    </header>
  );
}

export default HeaderLanding;

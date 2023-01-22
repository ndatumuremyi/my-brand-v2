import React from 'react';
import PropTypes from 'prop-types';

function GeneralHeader2({ title, description, icon }) {
  return (
    <div id="my_bland" className="flex justify-evenly items-center h-full">
      <div className="header_content flex flex-col justify-evenly ">
        <h5 className="text-second text-5xl font-bold tracking-wider">
          {title}
        </h5>
        <p className="text-white-light px-5">
          {description}
        </p>
      </div>
      <div className="brand_image_div">
        <span className=" brand_image_div material-symbols-outlined text-9xl text-white">{icon}</span>
        <img className="zig_zag_left" src="/assets/images/zigizaga_colored.svg" alt="" />
        <img className="zig_zag_right" src="/assets/images/zigizaga_colored.svg" alt="" />
        <img className="zig_zad_center" src="/assets/images/zigizaga_white.svg" alt="" />
      </div>
    </div>
  );
}

GeneralHeader2.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,

};
GeneralHeader2.defaultProps = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
};
export default GeneralHeader2;

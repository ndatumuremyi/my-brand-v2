import React from 'react';
import PropTypes from 'prop-types';

function GeneralHeader({ title, description, icon }) {
  return (
    <div className="flex flex-col max-w-3xl gap-2 justify-center items-center flex-1">
      <div className="header_content flex flex-col justify-evenly ">
        <h5 className="text-second text-5xl font-bold tracking-wider">
          {title}
        </h5>
        <p className="text-white-light">
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

GeneralHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,

};
GeneralHeader.defaultProps = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
};
export default GeneralHeader;

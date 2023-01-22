import React from 'react';
import PropTypes from 'prop-types';

function ModelMessages({ toggleModal }) {
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,
        jsx-a11y/no-static-element-interactions */}
      <div id="background_div_id" onClick={() => { toggleModal(); }} className="background" />
      <div className="modal bg-brand_bold relative w-full h-full">
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,
        jsx-a11y/no-static-element-interactions */}
        <span
          className="material-symbols-outlined p-4 bg-white text-brand-color rounded-full absolute right-3 top-0 cursor-pointer"
          onClick={() => { toggleModal(); }}
        >
          close
        </span>
        <div
          id="messageContainer"
          className="flex flex-wrap gap-2 justify-evenly items-center bg-white_blue_light w-full h-full overflow-y-scroll"
        >

          <div id="messageClone" className="flex flex-col gap-5 px-9 py-4 bg-brand_bold text-white rounded-xl">
            <div className="flex gap-2">
              <span className="material-symbols-outlined">person</span>
              <div className="flex flex-col gap-2">
                <h5 id="names">Eric niyoyayo</h5>
                <p id="createdAt">-</p>
              </div>
            </div>
            <p id="message" className="max-w-xs">
              I have a questing about the prgram and I really
              I have a questing about the prgram and I really I have a
              questing about the prgram and I really
              I have a questing about the prgram and I really I have a questing
              about the prgram and I really
            </p>
            <div className="flex flex-col self-end">
              <p id="email">eric@gmail.com</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

ModelMessages.propTypes = {
  toggleModal: PropTypes.func,
};
ModelMessages.defaultProps = {
  toggleModal: () => {},
};

export default ModelMessages;

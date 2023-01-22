import React, { useEffect } from 'react';
import ModelMessages from '../ModelMessages';

function AdminTopNav() {
  const toggleModal = () => document.body.classList.toggle('open');
  useEffect(() => {
    const notificationIcon = document.getElementById('notification-icon');
    const notificationContent = document.getElementById('notification_content');
    notificationIcon.onclick = () => {
      notificationContent.classList.toggle('expand');
      notificationContent.classList.toggle('collapse');
    };
  }, []);
  return (
    <>
      <header className="bg-brand_bold text-white flex flex-col">
        <nav className="flex gap-7 w-full justify-between items-center flex-wrap py-4 px-9">
          <a href="/" className="appearance-none">
            <img className="h-12" alt="" src="/assets/images/logo_with_name.svg" />
          </a>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="relative text-white-light block flex-1">
            <span
              className="material-symbols-outlined pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-3"
            >
              search
            </span>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="type to search"
              className="appearance-none w-full min-w-11 form-input rounded-3xl border-2 border-brand py-5 px-4 bg-white placeholder-gray-400 text-white-light w-full block pl-14"
            />
          </label>
          <div className="flex gap-2 mx-auto">
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,
            jsx-a11y/no-static-element-interactions */}
            <span className="relative rounded-xl bg-brand_color px-3 py-3 cursor-pointer" onClick={() => { toggleModal(); }}>
              <span id="newMessageCount" className="notification-count">0</span>
              <span className="material-symbols-outlined">message</span>
            </span>
            <div className="flex items-center justify-center relative">
              <span id="notification-icon">
                <img alt="" src="/assets/images/avatar.png" />
              </span>
              <div
                className="notification_content bg-white_blue_light text-black absolute top-0 rounded-2xl border-2 border-brand solid shadow-2xl collapse"
                id="notification_content"
              >
                <a
                  href="/logout"
                  className="no-underline rounded-2xl bg-brand-third text-white px-5 py-2"
                >
                  Logout
                </a>
              </div>
            </div>
          </div>

        </nav>
      </header>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,
      jsx-a11y/no-static-element-interactions */}
      <ModelMessages toggleModal={toggleModal} />
    </>

  );
}

export default AdminTopNav;

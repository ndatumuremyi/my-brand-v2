import React from 'react';

function BottomNav() {
  return (
    <div className="bg-brand_bold w-full bottom-0 fixed z-10 -md:flex justify-evenly py-4 px-5 md:hidden">
      <a className="appearance-none text-white-light" href="#skills_div">
        Skills
      </a>
      <a className="appearance-none text-white-light" href="my_works.html">
        Works
      </a>
      <a className="appearance-none text-white-light" href="contact_us.html">
        Contact us
      </a>

    </div>

  );
}

export default BottomNav;

import React from 'react';

function TopNav() {
  return (
    <nav className="flex w-full bg-brand_bold justify-between items-center nav_div fixed top-0 z-60">
      <img className="h-12 max-w-full" alt="" src="/assets/images/logo_with_name.svg" />
      <nav className="gap-12 mr-12 -md:hidden md:flex">
        <a
          href="/#skills_div"
          className="nav_btn no-underline appearance-none text-white"
        >
          Skills
        </a>
        <a
          href="/my-works"
          className="nav_btn no-underline appearance-none text-white"
        >
          Work
        </a>
        <a
          href="/contact-us"
          className="nav_btn no-underline appearance-none text-white"
        >
          Contact us
        </a>
      </nav>
    </nav>
  );
}
export default TopNav;

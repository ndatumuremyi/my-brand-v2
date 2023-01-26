import React from 'react';
import { Link } from 'react-router-dom';

function TopNav() {
  return (
    <nav className="flex w-full bg-brand_bold justify-between items-center nav_div fixed top-0 z-60">
      <Link to="/"><img className="h-12 max-w-full" alt="" src="/assets/images/logo_with_name.svg" /></Link>
      <nav className="gap-12 mr-12 -md:hidden md:flex">
        <Link
          to="/#skills_div"
          className="nav_btn no-underline appearance-none text-white"
        >
          Skills
        </Link>
        <Link
          to="/my-works"
          className="nav_btn no-underline appearance-none text-white"
        >
          Work
        </Link>
        <Link
          to="/contact-us"
          className="nav_btn no-underline appearance-none text-white"
        >
          Contact us
        </Link>
      </nav>
    </nav>
  );
}
export default TopNav;

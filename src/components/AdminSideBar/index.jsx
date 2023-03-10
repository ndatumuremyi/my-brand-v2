import React from 'react';
import pagesPath from '../../system/constants/pagesPath';

function AdminSideBar() {
  return (
    <nav className="bg-brand_bold min-w-16 py-5 md:flex flex-col gap-4 items-center -md:hidden">
      <a className="appearance-none text-white-light" href="/dashboard">
        Dashboard
      </a>
      <a className="appearance-none text-white" href={pagesPath.dashboardBlogs}>
        Blog
      </a>

    </nav>
  );
}

export default AdminSideBar;

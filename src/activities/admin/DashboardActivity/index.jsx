import React from 'react';
import AdminTopNav from '../../../components/AdminTopNav';
import AdminSideBar from '../../../components/AdminSideBar';
import Footer from '../../../components/Footer';

function DashboardActivity() {
  return (
    <div className="flex flex-col page-content">
      <header className="bg-brand_bold text-white flex flex-col">
        <AdminTopNav />
      </header>
      <div className="flex h-screen">
        <AdminSideBar />
        <main className="flex-1 flex gap-4 flex-wrap items-start py-5 px-3 justify-evenly">
          <div className="flex flex-col bg-brand_bold px-9 py-9 gap-7 rounded-lg min-w-16 min-h-11 text-center">
            <p className="text-white">Blogs</p>
            <p id="blogCount" className="text-3xl text-white font-bold"> 0</p>
          </div>
          <div className="flex flex-col bg-brand_bold px-9 py-9 gap-7 rounded-lg min-w-16 min-h-11 text-center">
            <p className="text-white">New messages</p>
            <p id="messageCount" className="text-3xl text-white font-bold"> 0</p>
          </div>

        </main>
      </div>

      <div className="bg-brand_bold w-full bottom-0 fixed z-10 -md:flex justify-evenly py-4 px-5 md:hidden">
        <a className="appearance-none text-white-light" href="/">
          Dashboard
        </a>
        <a className="appearance-none text-white-light" href="/">
          blog
        </a>
      </div>

      <Footer />
    </div>
  );
}

export default DashboardActivity;

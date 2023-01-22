import React from 'react';
import AdminTopNav from '../../../components/AdminTopNav';
import Footer from '../../../components/Footer';
import AdminSideBar from '../../../components/AdminSideBar';
import '../../../css/popupButtons.css';

function BlogsDashboard() {
  return (
    <div className="flex flex-col page-content">
      <AdminTopNav />
      <div className="flex h-screen">
        <AdminSideBar />
        <main className="flex-1 flex gap-4 flex-wrap items-start py-5 px-3 overflow-y-scroll">
          <div id="blog_container" className="flex gap-4 flex-wrap items-center">
            <div id="blog_single_view" className="flex flex-col bg-brand_bold px-9 py-9 gap-7 rounded-lg w-20">
              <p id="title_view" className="text-white">How to make it possible</p>
              <button
                id="edit_blog"
                type="button"
                className="px-3 no-underline appearance-none text-center text-white py-4 rounded-xl bg-brand_color"
              >
                Edit
              </button>
            </div>

          </div>
          <div
            className="flex border-2 dashed border-brand  bg-white flex-col bg-brand_bold px-9 py-9 gap-7 rounded-lg min-w-16 min-h-11"
          >
            <a
              href="new_blog_form.html?edit=false"
              className="px-3 py-4 text-center rounded-xl my-auto text-brand-color bg-white_blue_light"
            >
              Add
            </a>
          </div>
        </main>

      </div>
      <Footer />
    </div>

  );
}

export default BlogsDashboard;

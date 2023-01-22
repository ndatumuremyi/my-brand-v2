import React from 'react';
import Footer from '../../../components/Footer';
import '../../../css/popupButtons.css';
import AdminTopNav from '../../../components/AdminTopNav';
import AdminSideBar from '../../../components/AdminSideBar';

function NewBlogActivity() {
  return (
    <div id="main_content" className="flex flex-col page-content">
      <AdminTopNav />
      <div className="flex">
        <AdminSideBar />
        <form
          id="create_edit_blog"
          className="flex-1 flex justify-between gap-4 flex-wrap items-start py-5 px-9 bg-F1F3F9"
          noValidate
        >
          <div className="flex flex-col gap-4">
            <div className="flex gap-5 items-center justify-center">
              <a
                className="material-symbols-outlined appearance-none no-underline text-center bg-white_blue_light text-brand-color p-4 rounded-full"
                href="/dashboard"
              >
                arrow_back
              </a>
              <h2 className="text-brand-color text-3xl">
                <span id="title_blog">Edit</span>
                {' '}
                Blog
              </h2>
            </div>

            <p>BLOG</p>

            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="flex flex-col gap-3">
              <span className="text-brand-color">Title</span>
              <input
                name="title"
                id="title_field"
                className="bg-white border-none rounded-lg px-9 py-4 w-full"
                placeholder="title"
                type="text"
              />
              <span id="title_error" className="max-w-xs text-red-light left-3 bottom-0 error" />
            </label>
            <div className="flex flex-col gap-3">
              <span className="text-brand-color">Description</span>
              <div className="bg-white border-none rounded-lg px-9 py-4 w-full" id="blog_editor" />
              <span id="description_error" className="max-w-xs text-red-light left-3 bottom-0 error" />
            </div>

            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="flex flex-col gap-3">
              <span className="text-brand-color">Blog category</span>
              <select
                id="category_field"
                name="category"
                className="bg-white border-none rounded-lg px-9 py-4 w-full"
              >
                <option value="tech" selected className="bg-white">Tech</option>
                <option value="life" className="bg-white">Life</option>
                <option value="others" className="bg-white">Others</option>
              </select>
            </label>
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex flex-col">
              <span className="text-brand-color"> Featured Image</span>
              <span id="image_name" className="text-brand-color max-w-sm" />

              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label
                className="cursor-pointer flex items-center space-x-3 w-full border-2 border-dashed border-brand rounded-lg px-4 py-6 "
              >
                <span className="material-symbols-outlined text-brand-color text-3xl">
                  upload
                </span>
                <span className="flex flex-col">
                  Click to select file(s)
                </span>
                <input
                  name="image"
                  id="image_field"
                  accept=".jpg,.png,.jpeg"
                  className="hidden"
                  type="file"
                />
                <span id="image_error" className="max-w-xs text-red-light left-3 bottom-0 error" />
              </label>
            </div>
            <div className="flex-col flex py-9 px-9 rounded-lg border-2 w-20 solid border-brand" id="saving_div">
              <button
                type="submit"
                className="text-white no-underline text-center px-5 py-5 bg-brand_bold rounded-xl"
              >
                Save changes
              </button>
              <span className="line mt-12 mb-2" />
              <button type="button" id="delete_blog" className="text-red px-5 py-5 bg-white_blue_light rounded-xl">
                Delete post
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="bg-brand_bold w-full bottom-0 fixed z-10 -md:flex justify-evenly py-4 px-5 md:hidden">
        <a className="appearance-none text-white-light" href="/dashboard">
          Dashboard
        </a>
        <a className="appearance-none no-underline text-white-light" href="/dashboard/blogs">
          blog
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default NewBlogActivity;

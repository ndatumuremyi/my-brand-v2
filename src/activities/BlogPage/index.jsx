import React from 'react';
import TopNav from '../../components/TopNav';
import Footer from '../../components/Footer';
import BottomNav from '../../components/BottomNav';

function BlogPage() {
  return (
    <>
      <header className="bg-brand_bold text-white flex flex-col header">
        <TopNav />
        <div id="my_bland" className="flex justify-evenly items-center h-full">
          <div className="header_content flex flex-col justify-evenly ">
            <h5 className="text-second text-5xl font-bold tracking-wider">
              Articles
            </h5>
            <p className="text-white-light px-5">
              Through reading you can get insight !!
            </p>
          </div>
          <div className="brand_image_div">
            <span className=" brand_image_div material-symbols-outlined text-9xl text-white">auto_stories</span>
            <img className="zig_zag_left" src="/assets/images/zigizaga_colored.svg" alt="" />
            <img className="zig_zag_right" src="/assets/images/zigizaga_colored.svg" alt="" />
            <img className="zig_zad_center" src="/assets/images/zigizaga_white.svg" alt="" />
          </div>
        </div>
      </header>
      <main className="flex flex-col gap-12 contact_main relative my-9">
        <div className="flex gap-5 mx-9 flex-wrap">
          <button type="button" className="rounded-xl bg-brand_color text-white-light p-4"> All</button>
          <button type="button" className="rounded-xl  text-white-light p-4"> Life</button>
          <button type="button" className="rounded-xl text-white-light p-4"> Tech</button>
          <button type="button" className="rounded-xl text-white-light p-4"> Dev</button>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="">
            <input type="text" className="h-12 rounded-xl" />
          </label>

        </div>
        <div id="blogsContainer" className="flex flex-wrap gap-5 justify-center">
          <div
            id="blog_single_view_client"
            className="flex flex-col bg-brand-third items-center rounded-xl gap-6 px-5 py-9 text-white-light"
          >
            <div className="rounded-xl overflow-hidden relative">
              <img id="blog_image" src="/assets/images/coffee_boy.svg" width="310" alt="" />
              <div className="absolute flex justify-between top-0 w-full px-5 pt-2">
                <span
                  className="text-red flex flex-col items-center gap-1 cursor-pointer bg-white_blue_light p-2 rounded-full"
                >
                  <span className="material-symbols-outlined">favorite</span>
                  <span id="blog_likes">0</span>
                </span>
                <span
                  className="text-brand-color flex flex-col items-center gap-1 cursor-pointer bg-white_blue_light p-2 rounded-full"
                >
                  <span className="material-symbols-outlined">chat</span>
                  <span id="blog_comments">0</span>
                </span>
              </div>
            </div>
            <p id="blog_title" className="max-w-xs text-center text-xl">
              Why figma is the best designing tools on web
              ?
            </p>
            <div className="flex justify-between w-full gap-2">
              <span id="blog_category" className="text-xs">DESIGN</span>
              <span id="blog_createdAt" className="text-xs">MAR 15TH &#39;22</span>
            </div>
            <button
              id="view_more_blog"
              type="button"
              className="px-9 no-underline text-center py-4 text-brand-color bg-white rounded-xl bold"
            >
              Read More
            </button>
          </div>

        </div>
        <form
          id="subscribe_form"
          className="bg-brand_bold flex flex-col items-center py-9 mx-9 rounded-xl gap-12"
          noValidate
        >
          <h2 className="text-second text-3xl">Interested in my articles ?</h2>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            <input name="email" id="email_field" className="py-2 w-20 rounded-xl" type="email" alt="" />
            <span id="email_error" className="text-red-light left-3 bottom-0 error" />
          </label>
          <button type="button" className="px-5 py-4 rounded-lg bg-white_blue_light">
            <span
              className="text-brand-color"
            >
              Subscribe
            </span>
          </button>

        </form>
      </main>
      <BottomNav />
      <Footer />
    </>
  );
}
export default BlogPage;

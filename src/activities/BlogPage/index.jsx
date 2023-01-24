import React, { useEffect, useState } from 'react';
import TopNav from '../../components/TopNav';
import Footer from '../../components/Footer';
import BottomNav from '../../components/BottomNav';
import { getAll } from '../../system/utils/backend';
import endpoints from '../../system/constants/endpoints';
import SingleBlogCard from '../../components/_Parties/blogsPage/SingleBlogCard';

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getAll(endpoints.BLOGS).then((results) => {
      setBlogs(results);
    });
  }, []);
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
          {
            blogs.map((each) => (
              // eslint-disable-next-line no-underscore-dangle
              <React.Fragment key={each._id}>
                <SingleBlogCard blog={each} />
              </React.Fragment>
            ))
          }

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

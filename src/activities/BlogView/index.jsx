import React from 'react';
import TopNav from '../../components/TopNav';
import BottomNav from '../../components/BottomNav';
import Footer from '../../components/Footer';

function BlogView() {
  return (
    <>
      <TopNav />
      <main className="flex flex-col gap-12 contact_main relative my-9 items-center">
        <div className="blog_image_container">
          <img
            id="image"
            src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
            className="w-full rounded-xl"
            alt=""
          />
        </div>
        <div className="flex justify-evenly w-full px-9">
          <div>
            <h3 id="title" className="text-4xl">title</h3>
            <div className="flex gap-2">
              <span>Written by paterneN</span>
              <span>Monday May 20</span>
            </div>
          </div>
          <span id="clickToLike" className="text-brand-color flex flex-col items-center gap-1 cursor-pointer">
            <span className="material-symbols-outlined">favorite</span>
            <span id="likes_count">0</span>
          </span>
        </div>
        <div id="description" className="max-w-2xl flex flex-col gap-4 text-black-light">
          <p>
            descr
          </p>
        </div>

        <h1 className="comment_header relative w-full mb-2">
          Comments (
          <span id="comment_counts">0</span>
          )
        </h1>
        <div id="comment_section" className="flex flex-col gap-12 self-start ml-20 px-20 relative comment_timeline">
          <div id="comment_container" className="flex flex-col max-w-xl gap-6 comment-container relative">
            <span className="comment-container-before material-symbols-outlined">person</span>
            <h3 id="names">Dr. Mbonimana Gamariel</h3>
            <p id="comment" className="text-black-light">
              Mbikuyekumutima mbasabye imbabazi Nyakubahwa Perezida n&#39;Abanya
              #rwanda mwese. Nakoze icyaha cyo gutwara imodoka nanyweye inzoga.
              Nafashe umwanzuro wo kutazongera kunywa
              inzoga. Mwumve gutakamba kwanjye.Niteguye kuzuza neza izindi
              nshingano zose mungiriye icyizere, @PaulKagame
            </p>
          </div>
        </div>

        <div className="w-full md:px-20">
          <form
            id="comment_form"
            noValidate
            className="mx-auto max-w-5xl w-full bg-F1F3F9 px-10 flex flex-col items-center gap-7 justify-evenly py-20 rounded-xl contact_form"
          >
            <h3 className="text-third text-3xl mb-12">Have something to say?</h3>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="self-stretch">
              <input
                id="names_field"
                name="names"
                className="bg-white border-none rounded-lg px-9 py-4 w-full"
                type="text"
                placeholder="Names"
              />
              <span id="names_error" className="text-red-light left-3 bottom-0 error" />
            </label>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="self-stretch">
              <input
                name="email"
                id="email_field"
                className="bg-white border-none rounded-lg px-9 py-4 w-full"
                type="email"
                placeholder="email"
              />
              <span id="email_error" className="text-red-light left-3 bottom-0 error" />
            </label>

            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="self-stretch">
              <textarea
                name="comment"
                id="description_field"
                className="bg-white border-none rounded-lg px-9 py-4 w-full"
                rows="10"
              />
              <span id="description_error" className="text-red-light left-3 bottom-0 error" />
            </label>

            <button type="submit" className="px-5 py-4 rounded-lg bg-white_blue_light">
              <span
                className="text-brand-second text-xl"
              >
                Comment
              </span>
            </button>

          </form>
        </div>

      </main>
      <BottomNav />
      <Footer />
    </>
  );
}

export default BlogView;

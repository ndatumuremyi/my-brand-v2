import React from 'react';
import Footer from '../../components/Footer';
import BottomNav from '../../components/BottomNav';
import TopNav from '../../components/TopNav';
import GeneralHeader from '../../components/GeneralHeader';

function ContactUsPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="bg-brand_bold text-white flex flex-col relative">
        <TopNav />
        <div id="my_bland" className="flex justify-between flex-wrap">
          <GeneralHeader icon="headset_mic" title="Contact Me" description="Ping me up!!" />
          <main className="flex flex-col flex-1 max-w-xl gap-12 contact_main relative">
            <form
              id="contact_form"
              className="h-contact bg-brand_color_light items-stretch mx-20 flex flex-col items-center justify-evenly py-20 rounded-xl contact_form"
              noValidate
            >
              <div className="flex gap-7 max-w-42 my-5 -md:flex-wrap">
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label className="w-full relative">
                  <input
                    id="names_field"
                    name="names"
                    className="bg-white-13 text-white valid:border-none invalid:border-red rounded-lg px-9 py-4 w-full"
                    type="text"
                    placeholder="Names"
                  />
                  <span
                    id="names_error"
                    className="text-red-light auto-hide-error bg-brand_bold p-4 rounded-xl translate-y-12 left-3 absolute top-0 error z-10"
                  />
                </label>
              </div>
              <div className="flex gap-7 max-w-42 my-5 -md:flex-wrap">
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label className="w-full relative">
                  <input
                    name="email"
                    id="email_field"
                    className="bg-white-13 text-white valid:border-none invalid:border-red rounded-lg px-9 py-4 w-full"
                    type="email"
                    placeholder="Email"
                  />
                  <span
                    id="email_error"
                    className="text-red-light auto-hide-error bg-brand_bold p-4 rounded-xl translate-y-12 left-3 absolute top-0 error z-10"
                  />
                </label>
              </div>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="max-w-42 relative">
                <textarea
                  id="description_field"
                  name="message"
                  className="bg-white-13 text-white valid:border-none invalid:border-red rounded-lg px-9 py-4 w-full "
                  rows="10"
                />
                <span
                  id="description_error"
                  className="text-red-light auto-hide-error bg-brand_bold p-4 rounded-xl translate-y-32 left-3 absolute top-0 error z-10"
                />
              </label>

              <button type="submit" className="rounded-xl px-9 py-4 max-w-20 my-9 bg-brand_color text-white-light">
                Contact
              </button>

            </form>
          </main>

        </div>
      </div>

      <div className="bg-brand_bold w-full bottom-0 fixed z-10 -md:flex justify-evenly py-4 px-5 md:hidden">
        <a className="appearance-none text-white-light" href="/">
          Skills
        </a>
        <a className="appearance-none text-white-light" href="/">
          Works
        </a>
        <a className="appearance-none text-white-light" href="/">
          Contact us
        </a>

      </div>
      <BottomNav />
      <Footer />
    </div>
  );
}

export default ContactUsPage;

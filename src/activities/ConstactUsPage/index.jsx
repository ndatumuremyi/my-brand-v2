import React from 'react';
import Footer from '../../components/Footer';
import BottomNav from '../../components/BottomNav';
import TopNav from '../../components/TopNav';
import GeneralHeader from '../../components/GeneralHeader';
import ContactUsForm from '../../components/_Parties/contactUs/ContactUsForm';

function ContactUsPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="bg-brand_bold text-white flex flex-col relative">
        <TopNav />
        <div id="my_bland" className="flex justify-between flex-wrap">
          <GeneralHeader icon="headset_mic" title="Contact Me" description="Ping me up!!" />
          <main className="flex flex-col flex-1 max-w-xl gap-12 contact_main relative">
            <ContactUsForm />
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

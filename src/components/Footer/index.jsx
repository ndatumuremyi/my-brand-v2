import React from 'react';
import { Link } from 'react-router-dom';
import pagesPath from '../../system/constants/pagesPath';

function Footer() {
  return (
    <footer
      className="flex flex-col relative bg-brand_bold text-white justify-between px-9 py-9 footer"
    >
      <div className="flex justify-between pt-9 mb-12 footer_content">
        <div id="let_talk" className="flex flex-col gap-7">
          <h3 className="text-4xl">Let&lsquo;s Talk!</h3>
          <h4>Contact info</h4>
          <p className="text-white-light">paternenught@gmail.com</p>
          {/* <p className="text-white-light">UR-CST Kigali</p> */}
          <p className="text-white-light">+250 786 388 768</p>
        </div>
        <div id="what_i_do" className="flex flex-col gap-7">
          <h4>What I Do?</h4>
          <p className="text-white-light">Designing</p>
          <p className="text-white-light">Coding</p>
          <p className="text-white-light">Planning</p>
          <p className="text-white-light">Leading</p>
        </div>
        <div id="quick_link" className="flex flex-col gap-7">
          <h4>Quick Links</h4>
          <Link to={pagesPath.blogs} className="text-white-light">Blog</Link>
          <Link
            to={pagesPath.login}
            className="appearance-none text-white-light"
          >
            Login
          </Link>
          <a href="https://www.google.com" className="text-white-light">Github</a>
          <a href="https://www.google.com" className="text-white-light">Resume</a>
          <a href="https://www.google.com" className="text-white-light">Slack</a>
        </div>
      </div>
      <p className="flex justify-center text-white-light py-20 happy_codding">
        Happy Codding!
      </p>
    </footer>
  );
}

export default Footer;

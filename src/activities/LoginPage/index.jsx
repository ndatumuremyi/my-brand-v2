import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="bg-brand_bold flex justify-center items-center h-screen">
      <div className="flex flex-col w-380 h-582 gap-2 bg-white rounded-2xl items-center py-5 px-5">
        <Link to="/" className="no-underline no-underline">
          <img
            width="48"
            height="48"
            src="/assets/images/logo.svg"
            alt=""
          />
        </Link>

        <span className="text-black bold">
          paterneN
        </span>
        <span className="text-2xl mt-5">
          Log In
        </span>
        <span className="text-black-light">
          Enter your email and password below
        </span>
        <form
          id="login_form"
          noValidate
          className="flex flex-col mt-5 gap-5 w-full text-black-light"
        >
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="flex flex-col">
            <span>
              Email
            </span>
            <input
              id="email_field"
              name="email"
              type="email"
              className="p-4 rounded-xl w-full bg-brand_color_light"
              placeholder="adeli....@gmail.com"
            />
            <span id="email_error" className="text-red-light left-3 bottom-0 error" />
          </label>

          <div className="flex flex-col relative">
            <div className="flex justify-between">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="password_field">Password</label>
              <span className="cursor-pointer">Forgot password?</span>
            </div>
            <input
              alt=""
              id="password_field"
              name="password"
              className="p-4 rounded-xl w-full bg-brand_color_light "
              type="password"
              placeholder="************"
            />
            <span id="password_error" className="text-red-light left-3 bottom-0 error" />
          </div>
          <button
            type="submit"
            className="py-4 no-underline bg-brand_color text-white w-full rounded-2xl text-center"
          >
            Login
          </button>
        </form>
        <span>
          <span>Don’t have an account?</span>
          <Link to="/contact-us" className="cursor-pointer pl-1 text-brand-color">Contact us</Link>
        </span>
      </div>
    </div>
  );
}

export default LoginPage;

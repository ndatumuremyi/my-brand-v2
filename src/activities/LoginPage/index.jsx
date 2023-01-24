import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import { loginFields } from '../../system/constants/fields';
import { checkValidation, setAttributes, validate } from '../../system/utils/validation';
import Constants from '../../system/constants';
import endpoints from '../../system/constants/endpoints';
import Secure from '../../system/secureLs';
import keys from '../../system/constants/keys';
import useRouter from '../../system/utils/useRouter';

function LoginPage() {
  const router = useRouter();
  useEffect(() => {
    loginFields.forEach((eachField) => {
      setAttributes(eachField);
      validate(eachField);
    });
  }, []);

  function onSubmit(event) {
    // if the email field is valid, we let the form submit
    const formData = new FormData(event.target);
    const isFormValid = checkValidation(loginFields);
    event.preventDefault();
    if (isFormValid) {
      const dataSend = {};
      // eslint-disable-next-line no-restricted-syntax
      for (const each of formData) {
        // eslint-disable-next-line prefer-destructuring
        dataSend[each[0]] = each[1];
      }
      axios
        .post(`${Constants.DEFAULT_API}${endpoints.LOGIN}`, dataSend)
        .then((response) => {
          console.log('response', response);
          const {
            data: { token, data },
          } = response;
          // setProfile({ ...user });
          Secure.setToken(token);
          Secure.set(keys.USER_INFO, { token, data });
          router.push('/dashboard');
        }).catch((error) => {
          console.error(error);
          swal('Something went wrong!', `${error.message}`, 'error').catch((err) => { console.error(err); });
        });
    }
  }
  return (
    <div className="bg-brand_bold flex justify-center items-center h-screen">
      <div className="flex flex-col w-380 gap-2 bg-white rounded-2xl items-center py-5 px-5">
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
          onSubmit={onSubmit}
          id="login_form"
          noValidate
          className="flex flex-col mt-5 gap-2 w-full text-black-light"
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

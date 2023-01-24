import React, { useEffect } from 'react';
import swal from 'sweetalert';
import { contactFields } from '../../../../system/constants/fields';
import { checkValidation, setAttributes, validate } from '../../../../system/utils/validation';
import endpoints from '../../../../system/constants/endpoints';
import { add } from '../../../../system/utils/backend';

function ContactUsForm() {
  useEffect(() => {
    contactFields.forEach((eachField) => {
      setAttributes(eachField);
      validate(eachField);
    });
  }, []);
  const onSubmit = (event) => {
    // if the email field is valid, we let the form submit
    event.preventDefault();

    const isFormValid = checkValidation(contactFields);
    if (!isFormValid) {
      return;
    }
    const formData = new FormData(event.target);
    const message = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const each of formData) {
      // eslint-disable-next-line prefer-destructuring
      message[each[0]] = each[1];
    }
    add(`${endpoints.MESSAGES}`, message).then((result) => {
      console.log(result);
      swal('Message received!', 'we will reach to you soon', 'success');
    }).catch((error) => {
      swal('Something went wrong!', `${error.message}`, 'error').catch((err) => console.error(err));
    });
  };
  return (
    <form
      onSubmit={onSubmit}
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
  );
}

export default ContactUsForm;

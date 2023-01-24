import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { commentFields } from '../../../../system/constants/fields';
import { checkValidation, setAttributes, validate } from '../../../../system/utils/validation';
import { add } from '../../../../system/utils/backend';
import endpoints from '../../../../system/constants/endpoints';

function AddNewCommentForm({ id, addComment }) {
  useEffect(() => {
    commentFields.forEach((eachField) => {
      setAttributes(eachField);
      validate(eachField);
    });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    // if the email field is valid, we let the form submit
    const isFormValid = checkValidation(commentFields);
    if (!isFormValid) {
      return;
    }
    if (!id) {
      return;
    }
    const formData = new FormData(event.target);

    const comment = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const each of formData) {
      // eslint-disable-next-line prefer-destructuring
      comment[each[0]] = each[1];
    }
    // if (singleBlog.comments) {
    //   singleBlog.comments.push(comment);
    // } else {
    //   singleBlog.comments = [comment];
    // }
    add(`${endpoints.BLOGS}/${id}/comments`, comment).then((result) => {
      addComment(result);
      // addCommentInView(result);
      // comment_counts.innerText = `${singleBlog.comments.length}`;
    });
  };
  return (
    <form
      onSubmit={onSubmit}
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
  );
}

AddNewCommentForm.propTypes = {
  id: PropTypes.string,
  addComment: PropTypes.func.isRequired,
};

AddNewCommentForm.defaultProps = {
  id: undefined,
};
export default AddNewCommentForm;

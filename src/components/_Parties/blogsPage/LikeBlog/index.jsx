import React, { useState } from 'react';
import PropTypes from 'prop-types';
import keys from '../../../../system/constants/keys';
import { getUniqueId } from '../../../../system/utilities';

function LikeBlog({ likeCount }) {
  if (!localStorage.getItem(keys.BROWSER_ID)) {
    localStorage.setItem(keys.BROWSER_ID, getUniqueId());
  }
  const [like, setLike] = useState(false);
  const likeBlog = () => {
    setLike(true);
  };
  const unlikeBlog = () => {
    setLike(false);
  };
  return (
    <button
      onClick={() => {
        if (like) unlikeBlog();
        else likeBlog();
      }}
      type="button"
      id="clickToLike"
      className="text-brand-color flex flex-col items-center gap-1 cursor-pointer"
    >
      <span className="material-symbols-outlined">favorite</span>
      <span id="likes_count">{likeCount}</span>
    </button>
  );
}
LikeBlog.defaultProps = {
  likeCount: 0,
};
LikeBlog.propTypes = {
  likeCount: PropTypes.number,
};

export default LikeBlog;

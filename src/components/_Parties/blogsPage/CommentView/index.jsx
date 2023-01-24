import React from 'react';
import PropTypes from 'prop-types';

function CommentView({ comment }) {
  return (
    <div id="comment_container" className="flex flex-col max-w-xl gap-6 comment-container relative">
      <span className="comment-container-before material-symbols-outlined">person</span>
      <h3 id="names">{comment.names}</h3>
      <p id="comment" className="text-black-light">
        {comment.comment}
      </p>
    </div>

  );
}
CommentView.propTypes = {
  comment: PropTypes.shape({
    blogId: PropTypes.string,
    comment: PropTypes.string,
    email: PropTypes.string,
    names: PropTypes.string,
    _id: PropTypes.string,
  }),
};
CommentView.defaultProps = { comment: {} };

export default CommentView;

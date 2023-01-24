import React from 'react';
import PropTypes from 'prop-types';
import useRouter from '../../../../system/utils/useRouter';
import pagesPath from '../../../../system/constants/pagesPath';

function SingleBlogCard({ blog }) {
  const router = useRouter();
  return (
    <div
      id="blog_single_view_client"
      className="flex flex-col bg-brand-third items-center rounded-xl gap-6 px-5 py-9 text-white-light"
    >
      <div className="rounded-xl overflow-hidden relative">
        <img id="blog_image" src={blog.image} width="310" alt="" />
        <div className="absolute flex justify-between top-0 w-full px-5 pt-2">
          <span
            className="text-red flex flex-col items-center gap-1 cursor-pointer bg-white_blue_light p-2 rounded-full"
          >
            <span className="material-symbols-outlined">favorite</span>
            <span id="blog_likes">0</span>
          </span>
          <span
            className="text-brand-color flex flex-col items-center gap-1 cursor-pointer bg-white_blue_light p-2 rounded-full"
          >
            <span className="material-symbols-outlined">chat</span>
            <span id="blog_comments">0</span>
          </span>
        </div>
      </div>
      <p id="blog_title" className="max-w-xs text-center text-xl">
        {blog.title}
      </p>
      <div className="flex justify-between w-full gap-2">
        <span id="blog_category" className="text-xs">{blog.category}</span>
        <span id="blog_createdAt" className="text-xs">MAR 15TH &#39;22</span>
      </div>
      <button
        onClick={() => {
          /* eslint-disable-next-line no-underscore-dangle */
          router.push(`${pagesPath.blogPage}?id=${blog._id}`);
        }}
        id="view_more_blog"
        type="button"
        className="px-9 no-underline text-center py-4 text-brand-color bg-white rounded-xl bold"
      >
        Read More
      </button>
    </div>
  );
}
SingleBlogCard.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string,
    _id: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
  }),
};
SingleBlogCard.defaultProps = {
  blog: { title: '' },
};
export default SingleBlogCard;

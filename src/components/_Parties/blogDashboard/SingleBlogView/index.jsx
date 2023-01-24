import React from 'react';
import PropTypes from 'prop-types';
import useRouter from '../../../../system/utils/useRouter';
import pagesPath from '../../../../system/constants/pagesPath';

function SingleBlogView({ blog }) {
  const router = useRouter();
  return (
    <div className="flex flex-col bg-brand_bold px-9 py-9 gap-7 rounded-lg w-20">
      <p id="title_view" className="text-white">{blog.title}</p>
      <button
        onClick={() => {
          /* eslint-disable-next-line no-underscore-dangle */
          router.push(`${pagesPath.dashboardCreateNew}?id=${blog._id}`);
        }}
        id="edit_blog"
        type="button"
        className="px-3 no-underline appearance-none text-center text-white py-4 rounded-xl bg-brand_color"
      >
        Edit
      </button>
    </div>

  );
}
SingleBlogView.propTypes = {
  blog: PropTypes.shape({ title: PropTypes.string, _id: PropTypes.string }),
};
SingleBlogView.defaultProps = {
  blog: { title: '' },
};
export default SingleBlogView;

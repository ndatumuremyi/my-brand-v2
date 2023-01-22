import BlogView from '../../activities/BlogView';
import pagesPath from '../../system/constants/pagesPath';

const BlogPageRoute = {
  exact: true,
  name: 'blog',
  protected: false,
  guestOnly: false,
  path: pagesPath.blogPage,
  component: BlogView,
};

export default BlogPageRoute;

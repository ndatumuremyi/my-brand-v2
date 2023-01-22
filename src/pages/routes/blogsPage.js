import BlogPage from '../../activities/BlogPage';
import pagesPath from '../../system/constants/pagesPath';

const BlogPageRoute = {
  exact: true,
  name: 'blog',
  protected: false,
  guestOnly: false,
  path: pagesPath.blogs,
  component: BlogPage,
};

export default BlogPageRoute;

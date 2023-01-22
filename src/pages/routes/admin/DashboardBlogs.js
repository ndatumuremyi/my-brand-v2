import BlogsDashboard from '../../../activities/admin/BlogsDashboard';
import pagesPath from '../../../system/constants/pagesPath';

const BlogPageRoute = {
  exact: true,
  name: 'blog',
  protected: false,
  guestOnly: false,
  path: pagesPath.dashboardBlogs,
  component: BlogsDashboard,
};

export default BlogPageRoute;

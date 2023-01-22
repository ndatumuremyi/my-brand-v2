import NewBlogActivity from '../../../activities/admin/NewBlogActivity';
import pagesPath from '../../../system/constants/pagesPath';

const BlogPageRoute = {
  exact: true,
  name: 'blog',
  protected: false,
  guestOnly: false,
  path: pagesPath.dashboardCreateNew,
  component: NewBlogActivity,
};

export default BlogPageRoute;

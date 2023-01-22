import DashboardActivity from '../../../activities/admin/DashboardActivity';
import pagesPath from '../../../system/constants/pagesPath';

const BlogPageRoute = {
  exact: true,
  name: 'blog',
  protected: false,
  guestOnly: false,
  path: pagesPath.dashboard,
  component: DashboardActivity,
};

export default BlogPageRoute;

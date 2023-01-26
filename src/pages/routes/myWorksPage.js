import pagesPath from '../../system/constants/pagesPath';
import MyProjects from '../../activities/MyProjects';

const loginPageRoute = {
  exact: true,
  name: 'My works',
  protected: false,
  guestOnly: false,
  path: pagesPath.myWorks,
  component: MyProjects,
};

export default loginPageRoute;

import MyWorks from '../../activities/MyWorks';
import pagesPath from '../../system/constants/pagesPath';

const loginPageRoute = {
  exact: true,
  name: 'My works',
  protected: false,
  guestOnly: false,
  path: pagesPath.myWorks,
  component: MyWorks,
};

export default loginPageRoute;

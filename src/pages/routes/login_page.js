import LoginPage from '../../activities/LoginPage';
import pagesPath from '../../system/constants/pagesPath';

const loginPageRoute = {
  exact: true,
  name: 'Login',
  protected: false,
  guestOnly: false,
  path: pagesPath.login,
  component: LoginPage,
};

export default loginPageRoute;

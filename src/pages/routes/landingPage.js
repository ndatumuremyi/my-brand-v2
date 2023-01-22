import LandingPage from '../../activities/LandingPage';
import pagesPath from '../../system/constants/pagesPath';

const pageRoute = {
  exact: true,
  name: 'Landing page',
  protected: false,
  guestOnly: false,
  path: pagesPath.landingPage,
  component: LandingPage,
};

export default pageRoute;

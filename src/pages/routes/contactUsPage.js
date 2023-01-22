import ContactUsPage from '../../activities/ConstactUsPage';
import pagesPath from '../../system/constants/pagesPath';

const contactPageRoute = {
  exact: true,
  name: 'Contact us',
  protected: false,
  guestOnly: false,
  path: pagesPath.contactUs,
  component: ContactUsPage,
};

export default contactPageRoute;

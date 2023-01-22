import LandingPage from './routes/landingPage';
import LoginRoute from './routes/login_page';
import ContactUsPage from './routes/contactUsPage';
import BlogPageRoute from './routes/blogsPage';
import BlogViewPage from './routes/blogViewPage';
import NewBlogPage from './routes/admin/newBlogPage';
import dashboardPage from './routes/admin/dashboardPage';
import dashboardBlogs from './routes/admin/DashboardBlogs';
import myWorksPage from './routes/myWorksPage';

const pageRoutes = [
  LandingPage,
  LoginRoute,
  ContactUsPage,
  BlogPageRoute,
  BlogViewPage,
  NewBlogPage,
  dashboardPage,
  dashboardBlogs,
  myWorksPage,
];

export default pageRoutes;

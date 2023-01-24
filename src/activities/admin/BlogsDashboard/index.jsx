import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminTopNav from '../../../components/AdminTopNav';
import Footer from '../../../components/Footer';
import AdminSideBar from '../../../components/AdminSideBar';
import '../../../css/popupButtons.css';
import pagesPath from '../../../system/constants/pagesPath';
import SingleBlogView from '../../../components/_Parties/blogDashboard/SingleBlogView';
import { getAll } from '../../../system/utils/backend';
import endpoints from '../../../system/constants/endpoints';

function BlogsDashboard() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getAll(endpoints.BLOGS).then((results) => {
      setBlogs(results);
    });
  }, []);
  return (
    <div className="flex flex-col page-content">
      <AdminTopNav />
      <div className="flex h-screen">
        <AdminSideBar />
        <main className="flex-1 flex gap-4 flex-wrap items-start py-5 px-3 overflow-y-scroll">
          <div id="blog_container" className="flex gap-4 flex-wrap items-center">
            {
              blogs.map((each) => (
                // eslint-disable-next-line no-underscore-dangle
                <React.Fragment key={each._id}>
                  <SingleBlogView blog={each} />
                </React.Fragment>
              ))
            }

          </div>
          <div
            className="flex border-2 dashed border-brand  bg-white flex-col bg-brand_bold px-9 py-9 gap-7 rounded-lg min-w-16 min-h-11"
          >
            <Link
              to={`${pagesPath.dashboardCreateNew}?edit=false`}
              className="px-3 py-4 text-center rounded-xl my-auto text-brand-color bg-white_blue_light"
            >
              Add
            </Link>
          </div>
        </main>

      </div>
      <Footer />
    </div>

  );
}

export default BlogsDashboard;

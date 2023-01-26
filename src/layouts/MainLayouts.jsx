import React from 'react';
import PropTypes from 'prop-types';
import TopNav from '../components/TopNav';
import GeneralHeader2 from '../components/GeneralHeader2';
import Footer from '../components/Footer';

function MainLayouts({ children }) {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <header className="bg-brand_bold text-white flex flex-col header">
        <TopNav />
        <GeneralHeader2 icon="work" title="/Works" description="Selected projects i’ve worked on!" />
      </header>
      {children}
      <Footer />
    </div>
  );
}
MainLayouts.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MainLayouts;

import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
// import isAuth from 'app/system/helpers/isAuth';

function AppRoutes({ routes }) {
  const excludes = [];

  const renderRoute = (route) => {
    const nav = () => {
      if (route.guestOnly) {
        return <Navigate to="/dashboard" />;
      }
      if (route.protected) {
        return <Navigate to="/" />;
      }
      if (excludes.includes(route.path)) {
        return <Navigate to="/dashboard" />;
      }

      if (route.name) {
        document.title = route.name;
      }

      return (
        <route.component />
      );
    };
    return (
      <Route
        key={route.name}
        exact={route.exact}
        path={route.path}
        element={nav()}
      />
    );
  };

  return (
    <Routes>
      {
                routes.map((route) => renderRoute(route))
            }
    </Routes>

  );
}
AppRoutes.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  match: PropTypes.shape({}),
  routes: PropTypes.instanceOf(Array),
};

AppRoutes.defaultProps = {
  location: {},
  history: {},
  match: {},
  routes: [],
};

export default AppRoutes;

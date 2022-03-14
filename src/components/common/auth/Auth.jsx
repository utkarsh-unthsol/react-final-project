import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import { useUser } from '../../../context/User';

export default function Auth({ children }) {
  const user = useUser();
  if (!user) return <Navigate to="/login" replace />;

  return children;
}

Auth.defaultProps = {
  children: React.createElement,
};

Auth.propTypes = {
  children: PropTypes.element,
};

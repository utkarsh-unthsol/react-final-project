import React from 'react';
import PropTypes from 'prop-types';
import './Details.css';

export default function Details({ user }) {
  return (
    <section>
      <div className="details">
        <div className="details-content">
          <span>Phone no</span>
          <span>{user.phone}</span>
        </div>
        <div className="details-content">
          <span>Username</span>
          <span>{user.username}</span>
        </div>
        <div className="details-content">
          <span>Email</span>
          <span>{user.email}</span>
        </div>
      </div>
    </section>
  );
}

Details.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    username: PropTypes.string,
    phone: PropTypes.string,
  }),
};

Details.defaultProps = {
  user: Object,
};

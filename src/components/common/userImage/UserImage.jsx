import React from 'react';
import PropTypes from 'prop-types';
import './UserImage.css';

export default function UserImage({ data, radius = 5 }) {
  return (
    <div
      className="userimage-container super-center p-2"
      style={{
        '--diameter': `${radius}rem`,
      }}
    >
      <span className="userimage-initial">{(data && data[0]) || '?'}</span>
    </div>
  );
}

UserImage.propTypes = {
  data: PropTypes.string,
  radius: PropTypes.number,
};

UserImage.defaultProps = {
  data: String,
  radius: Number,
};

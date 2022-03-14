import React from 'react';
import PropTypes from 'prop-types';
import './Tag.css';

export default function Tag({ label, color = 'blue' }) {
  return <div className={`tag tag-color-${color.toLowerCase()}`}>{label}</div>;
}

Tag.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
};

Tag.defaultProps = {
  label: String,
  color: String,
};

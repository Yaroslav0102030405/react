import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({ children }) => <button type="button">{children}</button>;

IconButton.defaultProps = {
  children: null,
};

IconButton.propTypes = {
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;

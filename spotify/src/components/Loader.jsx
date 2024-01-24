import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

const Loader = ({ className }) => (
  <div className={`spinner-container ${className}`}>
    <Spinner animation="grow" className="spinner-logo" />
  </div>
);

Loader.propTypes = {
  className: PropTypes.string,
};

Loader.defaultProps = {
  className: '',
};

export default Loader;

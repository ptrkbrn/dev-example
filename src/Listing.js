/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function Listing(props) {
  const { title, image } = props;
  return (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <Button />
    </div>
  );
}

Listing.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,

};

export default Listing;

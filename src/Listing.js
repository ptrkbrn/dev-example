/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './Listing.css';

function Listing(props) {
  const { title, image } = props;
  return (
    <div className="Listing">
      <img src={image} alt={title} />
      <p>{title}</p>
      <Button />
    </div>
  );
}

Listing.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,

};

export default Listing;

// src/components/Preloader.js
import React from 'react';
import './Preloader.scss';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="loader">
        <div className="loader-inner"></div>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Preloader;

import React from 'react';

import './cardLoader.scss';

const CardLoader = () => {
  return (
    <div className="card-loader" data-test='card-loader'>
      <div className="shimmer img"></div>
      <div className="p-32">
        <div className="shimmer title-line"></div>
        <div className="shimmer title-line"></div>
        <div className="shimmer title-line"></div>
      </div>
    </div>
  );
};

export default CardLoader;

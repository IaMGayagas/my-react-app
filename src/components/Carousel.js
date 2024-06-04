import React from 'react';
import eco1 from '../assets/eco1.jpg';
import eco2 from '../assets/eco2.jpg';
import eco3 from '../assets/eco3.jpg';

const Carousel = () => {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={eco1} className="d-block w-100" alt="Ecosystem 1" />
        </div>
        <div className="carousel-item">
          <img src={eco2} className="d-block w-100" alt="Ecosystem 2" />
        </div>
        <div className="carousel-item">
          <img src={eco3} className="d-block w-100" alt="Ecosystem 3" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;

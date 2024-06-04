import React from 'react';
import BearCat from '../assets/Bear Cat.jpg';
import phorn from '../assets/Palawan Hornbill.jpg';
import eagle from '../assets/Philippine Eagle.jpg';
import tama from '../assets/Tamaraw.jpg';
import Turtle from '../assets/Forest Turtle.jpg';
import Tarsier from '../assets/Philippine Tarsier.jpg';
import VPig from '../assets/Visayan Warty Pig.jpg';
import PCroc from '../assets/Philippine Crocodile.jpg';


const EndangeredSpecies = () => {
  return (
    <div className="containerED d-flex flex-wrap vh-100 bg-transparent text-dark">
      <h1>ENDANGERED SPECIES IN THE PHILIPPINES</h1>
      <div className="card-container d-flex flex-wrap justify-content-between"> {/* Using justify-content: space-between for even spacing */}
        { /* Loop through the images and create cards dynamically */}
        {[BearCat, phorn, eagle, tama, Turtle, Tarsier, VPig, PCroc].map((imageUrl, index) => (
          <div className="col-md-4 col-lg-3 my-2" key={index}> {/* Add key prop for better performance */}
            <div className="card text-dark mx-auto" style={{ width: '300px', height: '550px' }}>
              <img src={imageUrl} className="card-img-top" alt={`Endangered Species - ${getImageName(imageUrl)}`} style={{ height: '300px', objectFit: 'cover' }} />
              <div className="card-body" style={{ overflow: 'auto' }}>
                <h5 className="card-title">{getImageName(imageUrl)}</h5> {/* Extract image names for titles */}
                <p className="card-text">Critically Endangered.</p>
                <a href="#donate" className="btn btn-primary align-baseline">Donate Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to extract image names from their paths (optional, but improves accessibility)
function getImageName(imageUrl) {
  const parts = imageUrl.split('/');
  return parts[parts.length - 1].split('.')[0]; // Get the filename without extension
}

export default EndangeredSpecies;

import React, { useState } from 'react';
import BearCat from '../assets/Bear Cat.jpg';
import phorn from '../assets/Palawan Hornbill.jpg';
import eagle from '../assets/Philippine Eagle.jpg';
import tama from '../assets/Tamaraw.jpg';
import Turtle from '../assets/Forest Turtle.jpg';
import Tarsier from '../assets/Philippine Tarsier.jpg';
import VPig from '../assets/Visayan Warty Pig.jpg';
import PCroc from '../assets/Philippine Crocodile.jpg';
import Notification from './Notification'; // Assuming Notification is in the same folder

const EndangeredSpecies = () => {
  const [notification, setNotification] = useState(null); // Optional state management

  const handleButtonClick = (message) => {
    setNotification(message); // Update state (optional)
  };

  return (
    <div className="container my-5 text-dark">
      <h1 className="text-center mb-4 text-black bg-transparent">ENDANGERED SPECIES IN THE PHILIPPINES</h1>
      <div className="row">
        {[
          { name: "Bear Cat", image: BearCat },
          { name: "Palawan Hornbill", image: phorn },
          { name: "Philippine Eagle", image: eagle },
          { name: "Tamaraw", image: tama },
          { name: "Forest Turtle", image: Turtle },
          { name: "Philippine Tarsier", image: Tarsier },
          { name: "Visayan Warty Pig", image: VPig },
          { name: "Philippine Crocodile", image: PCroc }
        ].map((species, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
            <div className="card h-100 text-dark mx-auto" style={{ maxWidth: '300px' }}>
              <img src={species.image} className="card-img-top" alt={`Endangered Species - ${species.name}`} style={{ height: '300px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{species.name}</h5>
                <p className="card-text">Critically Endangered.</p>
                <button onClick={() => handleButtonClick('Thank you for your donation!')} className="btn btn-primary mt-auto">Donate Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {notification && <Notification message={notification} />} {/* Pass notification state as a prop (optional) */}
    </div>
  );
};

export default EndangeredSpecies;

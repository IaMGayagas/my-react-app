import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Ecosystem from './components/Ecosystem';
import Carousel from './components/Carousel';
import EndangeredSpecies from './components/EndangeredSpecies';
import Climate from './components/Climate'
import GlobalWarming from './components/GlobalWarming';
import { WeatherData, Weather } from './components/Weather';
import CovidTracker from './components/CovidStats';
import ContactUs from './components/ContactUs';

import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Ecosystem />
      <Carousel />
      <EndangeredSpecies />

      <div className='Info'>
        <Climate/>
        <GlobalWarming/>
      </div>

      <div className="containerWC my-4">
            <div className="row">
              <h1>Other Related News: </h1>
                <div className="col-12 col-md-6">
                    <Weather/>
                    <WeatherData />
                </div>
                <div className="col-12 col-md-6">
                    <CovidTracker />
                </div>
            </div>
        </div>

      
      <ContactUs/>
      <Footer/>
      
    </div>
  );
}

export default App;

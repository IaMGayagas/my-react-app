import React from 'react'
import Global from '../assets/global.jpg'
const GlobalWarming = () => {
    return ( 
        <div className="containerGlobalWarming">
        <h1>GLOBAL WARMING</h1>
        <p>
            TGlobal warming poses a significant threat to the Philippines, exacerbating the country’s vulnerability 
            to natural disasters and impacting its rich biodiversity and agriculture. Rising temperatures have led to 
            increased sea levels, which threaten the archipelago’s extensive coastlines and contribute to more frequent
             and severe flooding. Additionally, the intensity of typhoons has escalated, resulting in devastating impacts
              on communities and infrastructure. Coral reefs, vital to marine life and the fishing industry, are experiencing 
              bleaching due to warmer sea temperatures. Agriculture, a cornerstone of the Philippine economy, is also suffering 
              from erratic weather patterns and prolonged droughts, undermining food security and livelihoods. The Filipino government 
              and various organizations are actively working to mitigate these effects through policies focused on renewable energy, 
              reforestation, and disaster preparedness, but the challenges posed by global warming remain profound and urgent. <br></br>
        </p>
        <img src={Global} alt='Philippine Climate' className='PhClimate' style={{ width: '750px', height: '424px' }}></img> <br></br>
  </div>
     );
}
 
export default GlobalWarming;
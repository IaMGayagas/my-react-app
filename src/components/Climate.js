import React from 'react';
import PClimate from '../assets/PClimate.jpg'

const  Climate= () => {
    return (  
    <div className="ContainerClimate">
        <h1>CLIMATE</h1>
        <p>
            The climate in the Philippines is characterized by a tropical maritime climate, featuring high temperatures, 
            high humidity, and abundant rainfall throughout the year. It experiences two primary seasons: the wet season, 
            which occurs from June to November, and the dry season, from December to May. The archipelago is frequently affected
            by typhoons, particularly between June and October, which can lead to significant rainfall and strong winds. 
            The country's climate is influenced by the northeast monsoon (Amihan) and the southwest monsoon (Habagat), with variations 
            in weather patterns across its diverse regions. Coastal areas tend to be hotter and more humid, while higher elevations 
            experience cooler temperatures. Overall, the climate plays a crucial role in the Philippines' agriculture, lifestyle, and 
            biodiversity. <br></br>
        </p>
        <img src={PClimate} alt='Philippine Climate' className='PhClimate' style={{ width: '474px', height: '226px' }}></img> <br></br>   
  </div>
    );
}
 
export default Climate ;
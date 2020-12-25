import React from 'react'; 
import ScheduleDec12 from './ScheduleDec12';
import ScheduleDec13 from './ScheduleDec13'

// Component Styling
import { header, gradient } from './PlaybackClass'; 


const WatchOnDemand = () => {
  return (
    <div>
      <h1 className={`${header} ${gradient}`}>Playback</h1>

      <ScheduleDec12/>

      <ScheduleDec13/>

    </div>
  )
}

export default WatchOnDemand; 
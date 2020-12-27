import React from 'react'; 
import { ScheduleDec13 } from '../../database/Schedule';


// Component Styling

import { PlaybackClass_Mobile, PlaybackClass_Web, card_Mobile, card_Web, card_hover, header, PlaybackDate, Speakers, ProfileImage, ProfileName, gradient, hrOpacity} from './PlaybackClass'; 

// Component Layout 

const ScheduleDec13Page = () => {
  return (
    <div>
      <br/>
      <hr className={hrOpacity}/>
      <br/>

      <h1 className={header}>Dec 13 2020</h1>

      <div className={`${PlaybackClass_Mobile} ${PlaybackClass_Web}`}>
        {ScheduleDec13.map((events) => (
          <a href={events.link} target='_blank'>
          <div className={`${card_Mobile} ${card_Web} ${card_hover}`}>
            <p className={gradient}>{events.title}</p>
            <p className={PlaybackDate}>{events.date} at {events.time}</p>
            <br/>
            {events.speakers.map((speaker) => (
              <div className={Speakers}>
                <img src={speaker.profile} alt={speaker.name} className={ProfileImage}/>
                <p className={ProfileName}>{speaker.name}</p>
              </div>
            ))}
          </div>
          </a>
        ))}        
      </div>
    </div>
  )
}

export default ScheduleDec13Page; 
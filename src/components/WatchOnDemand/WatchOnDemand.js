import React from 'react'; 
import { ScheduleDec12, ScheduleDec13 } from '../../database/Schedule';

// Component Styling

const PlaybackClass_Mobile = 'grid grid-cols-1 gap-7 p-3 ';
const PlaybackClass_Web = 'sm:p-10 sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols- sm:gap-7 sm:space-y-0';

const card_Mobile = 'border border-gray-700 hover:border-blue-400 bg-gray-900 flex flex-col p-5 space-y-2 rounded-md';
const card_Web = '';

const card_hover = 'transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:bg-[] hover:opacity-80'; 


const header = 'text-4xl py-10 pt-24';


const PlaybackDate = 'text-gray-600';
const Speakers = 'flex flex-row space-x-3 items-center'
const ProfileImage = 'w-1/12 object-contain rounded-full';
const ProfileName = 'text-gray-300 text-sm font-light w-5/12';

const gradient = 'bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-pink-500';
const hrOpacity = 'opacity-25'; 

const WatchOnDemand = () => {
  return (
    <div>
      <h1 className={`${header} ${gradient}`}>Playback</h1>

      <br/>
      <hr className={hrOpacity}/>
      <br/>

      <h1 className={header}>Dec 12 2020</h1>

      <div className={`${PlaybackClass_Mobile} ${PlaybackClass_Web}`}>
        {ScheduleDec12.map((events) => (
          <a href={events.link} target='_blank'>
          <div className={`${card_Mobile} ${card_Web} ${card_hover}`}>
            <p className={gradient}>{events.title}</p>
            <p className={PlaybackDate}>{events.date} at {events.time}</p>
            <br/>
            <div className={Speakers}>
            <img src={events.speakers.profile} alt={events.speakers.name} className={ProfileImage}/>
            <p className={ProfileName}>{events.speakers.name}</p>
            </div>
          </div>
          </a>
          
        ))}        
      </div>

      <br/>
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
            <div className={Speakers}>
            <img src={events.speakers.profile} alt={events.speakers.name} className={ProfileImage}/>
            <p className={ProfileName}>{events.speakers.name}</p>
            </div>
          </div>
          </a>
          
        ))}        
      </div>
    </div>
  )
}

export default WatchOnDemand; 
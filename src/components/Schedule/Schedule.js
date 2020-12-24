import React from 'react'; 
import { ScheduleDec12, ScheduleDec13 } from '../../database/Schedule'

// Component Styling

const LandingPageClass_Mobile = 'w-full py-24 flex flex-col flex-wrap justify-between';
const LandingPageClass_Web = 'lg:flex-row lg:justify-center items-center ...';

const Container_Mobile = 'w-full';
const leftContainer_Web = 'lg:w-4/12 ...';
const rightContainer_Web = ' z-50 lg:w-6/12 ...';

const TimeClass_Mobile = '';
const TimeClass_Web = '';

const DescriptionClass_Mobile = '';
const DescriptionClass_Web = '';

const header = 'text-5xl py-10 pt-24';
const subheader = 'text-4xl py-10';
const body = 'text-gray-50 text-md font-light w-full tracking-wide leading-relaxed';

const gradient = 'bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-pink-500';
const hover = 'hover:text-green-300';
const hrOpacity = 'opacity-25'; 

// Component Layout

const SchedulePage = () => {
  return (
    <div>
      <h1 className={header}>Schedule</h1>

      <br/>
      <hr className={hrOpacity}/>
      <br/>

      <h1 className={header}>Dec 12 2020</h1>
      <br/>
      {ScheduleDec12.map((events) => (
        <div className={`${LandingPageClass_Mobile} ${LandingPageClass_Web}`}>
        <div className={`${Container_Mobile} ${leftContainer_Web}`}>
          <div className={`${TimeClass_Mobile} ${TimeClass_Web}`}>
            <p className={body}>{events.date} — {events.time} {events.timeZone}</p>
          </div>
        </div>
        
        <div className={`${Container_Mobile} ${rightContainer_Web}`}>
          <div className={`${DescriptionClass_Mobile} ${DescriptionClass_Web}`}>
            <h1 className={`${subheader} ${gradient} ${hover}`}>{events.title}</h1>
            <p>{events.speakers.name}, {events.speakers.title}</p>
          </div>
        </div>
        </div>
      ))}

      <br/>
      <hr className={hrOpacity}/>
      <br/>

      <h1 className={header}>Dec 13 2020</h1>
      <br/>

      {ScheduleDec13.map((events) => (
        <div className={`${LandingPageClass_Mobile} ${LandingPageClass_Web}`}>
        <div className={`${Container_Mobile} ${leftContainer_Web}`}>
          <div className={`${TimeClass_Mobile} ${TimeClass_Web}`}>
            <p className={body}>{events.date} — {events.time} {events.timeZone}</p>
          </div>
        </div>
        
        <div className={`${Container_Mobile} ${rightContainer_Web}`}>
          <div className={`${DescriptionClass_Mobile} ${DescriptionClass_Web}`}>
            <h1 className={`${subheader} ${gradient} ${hover}`}>{events.title}</h1>
            <p>{events.speakers.name}, {events.speakers.title}</p>
          </div>
        </div>
        </div>
      ))}
      
    </div>
  )
}

export default SchedulePage; 
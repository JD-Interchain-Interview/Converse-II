import React from 'react'; 
import { Conference } from '../../database/Conference'
import ConferenceKikoffVideo from '../../assets/ConferenceKikoffVideo.png'

// Component Styling

const LandingPageClass_Mobile = 'w-full py-24 flex flex-col flex-wrap justify-between space-y-24';
const LandingPageClass_Web = 'lg:space-y-0 lg:flex-row lg:justify-between ...';

const Container_Mobile = 'w-full';
const leftContainer_Web = 'lg:w-5/12 ...';
const rightContainer_Web = 'z-50 lg:w-6/12 ...';

const DescriptionClass_Mobile = '';
const DescriptionClass_Web = '';

const KikoffClass_Mobile = '';
const KikoffClass_Web = '';
const Video = '';

const header = 'text-4xl py-10';
const body = 'text-gray-50 text-md font-light w-full tracking-wide leading-relaxed';

const gradient = 'bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-pink-500';


// Component Layout

const Home = () => {
  return (
    <div className={`${LandingPageClass_Mobile} ${LandingPageClass_Web}`}>
      <div className={`${Container_Mobile} ${leftContainer_Web}`}>
        <div className={`${DescriptionClass_Mobile} ${DescriptionClass_Web}`}>
          <h1 className={`${header} ${gradient}`}>{Conference.title} {Conference.year}</h1>
          <p className={body}>{Conference.description}</p>
        </div>
      </div>
      
      <div className={`${Container_Mobile} ${rightContainer_Web}`}>
        <div className={`${KikoffClass_Mobile} ${KikoffClass_Web}`}>
          <img src={ConferenceKikoffVideo} alr='Conference Kikoff Video' className={Video}/>
        </div>
      </div>
    </div>
  )
}

export default Home; 
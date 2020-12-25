import React from 'react'; 
import { Conference } from '../../database/Conference'
import ConferenceKikoffVideo from '../../assets/ConferenceKikoffVideo.png'

import HorizontalScroll_ScheduleDec12Page from './HorizontalScroll_ScheduleDec12Page'; 
import HorizontalScroll_ScheduleDec13Page from './HorizontalScroll_ScheduleDec13Page'; 
import Sponsors from '../Expo/Sponsors'; 

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
const VideoHover = 'transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:bg-[] hover:opacity-80'; 

const header = 'text-4xl py-10';
const body = 'text-gray-50 text-md font-light w-full tracking-wide leading-relaxed';

const gradient = 'bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-pink-500';
const hrOpacity = 'opacity-25'; 


// Component Layout

const Home = () => {
  return (
    <div>
      <div className={`${LandingPageClass_Mobile} ${LandingPageClass_Web}`}>
        <div className={`${Container_Mobile} ${leftContainer_Web}`}>
          <div className={`${DescriptionClass_Mobile} ${DescriptionClass_Web}`}>
            <h1 className={`${header} ${gradient}`}>{Conference.title} {Conference.year}</h1>
            <p className={body}>{Conference.description}</p>
          </div>
        </div>
        
        <div className={`${Container_Mobile} ${rightContainer_Web}`}>
          <a className={`${KikoffClass_Mobile} ${KikoffClass_Web}`} href='https://www.crowdcast.io/e/interchain-conversations-II/1' target='_blank'>
            <img src={ConferenceKikoffVideo} alr='Conference Kikoff Video' className={`${Video} ${VideoHover}`}/>
          </a>
        </div>
      </div>

      <br/>
      <p>virtual summit</p>
      <br/>
      <hr className={hrOpacity}/>
      <br/>

      <h1 className={`${header} ${gradient}`}>Playback</h1>


      <p>Dec 12 2020</p>
      <HorizontalScroll_ScheduleDec12Page/>

      <br/>
      <br/>
      <br/>
      
      <p>Dec 13 2020</p>
      <HorizontalScroll_ScheduleDec13Page/>


      <br/>
      <hr className={hrOpacity}/>
      <br/>

      <div>
        <Sponsors/>
      </div>
    </div>
  )
}

export default Home; 
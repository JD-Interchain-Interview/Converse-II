import React from 'react'; 
import { Conference } from '../../database/Conference'

// Component Styling

const LandingPageClass_Mobile = 'w-full flex flex-col flex-wrap justify-between';
const LandingPageClass_Web = 'lg:flex-row lg:justify-between ...';

const Container_Mobile = 'w-full';
const leftContainer_Web = 'lg:w-5/12 ...';
const rightContainer_Web = 'z-50 lg:w-6/12 ...';

const DescriptionClass_Mobile = '';
const DescriptionClass_Web = '';

const KikoffClass_Mobile = 'z-50 ...';
const KikoffClass_Web = '';


// Component Layout

const Home = () => {
  return (
    <div className={`${LandingPageClass_Mobile} ${LandingPageClass_Web}`}>
      <div className={`${Container_Mobile} ${leftContainer_Web}`}>
        <div className={`${DescriptionClass_Mobile} ${DescriptionClass_Web}`}>
          <header>{Conference.title} {Conference.season}</header>
          <p>{Conference.description}</p>
        </div>
      </div>
      
      <div className={`${Container_Mobile} ${rightContainer_Web}`}>
        <div className={`${KikoffClass_Mobile} ${KikoffClass_Web}`}>
          Conference Kikoff Video
        </div>
      </div>
    </div>
  )
}

export default Home; 
import React from 'react'; 
import { Conference } from '../../database/Conference'

// Component Styling

const Navbarlass_Mobile = 'w-full flex flex-col flex-wrap justify-between py-4 space-y-8';
const Navbarlass_Web = 'lg:space-y-0 lg:flex-row lg:justify-between...';

const Container_Mobile = 'w-full items-center';
const leftContainer_Web = 'flex justify-start lg:w-3/12 ...';
const centerContainer_Web = 'flex justify-center lg:w-6/12 lg:space-y-1 ...';
const rightContainer_Web = 'invisible lg:visible flex justify-end lg:w-3/12 ...';

const LogoClass_Mobile = 'flex flex-row space-x-1 items-center';
const LogoClass_Web = '';

const MenuClass_Mobile = 'w-3/12 text-center ...';
const MenuClass_Web = '';

const UserClass_Mobile = 'rounded-full border-2 border-blue-300';
const UserClass_Web = '';
const UserIcon = 'w-9 h-9 rounded-full';

const LogoIcon = 'w-1/12';
const LogoMark = 'w-4/12';

const body = 'text-gray-400 text-sm font-light w-full tracking-wide leading-relaxed';
const bodyHover = 'hover:text-pink-300';
const hr = 'visible lg:invisible opacity-25 pt-10'

// Component Layout

const Navbar = () => {
  return (
    <div className={`${Navbarlass_Mobile} ${Navbarlass_Web}`}>

      <div className={`${Container_Mobile} ${leftContainer_Web}`}>
        <a className={`${LogoClass_Mobile} ${LogoClass_Web}`} href='/'>
          <img src={Conference.logo} alt='Logo'className={LogoIcon}/>
          <p className={LogoMark}>{Conference.name} {Conference.year}</p>
        </a>
      </div>

      <hr className={hr}/>

      <div className={`${Container_Mobile} ${centerContainer_Web}`}>
        <div className={`${MenuClass_Mobile} ${MenuClass_Web}`}>
          <a className={`${body} ${bodyHover}`} href='/Watch-On-Demand'>playback</a>
        </div>
        <div className={`${MenuClass_Mobile} ${MenuClass_Web}`}>
          <a className={`${body} ${bodyHover}`} href='/Schedule'>schedule</a>
        </div>
        <div className={`${MenuClass_Mobile} ${MenuClass_Web}`}>
          <a className={`${body} ${bodyHover}`} href='/Speakers'>speakers</a>
        </div>
        <div className={`${MenuClass_Mobile} ${MenuClass_Web}`}>
          <a className={`${body} ${bodyHover}`} href='/Expo'>expo</a>
        </div>
      </div>
      
      <div className={`${Container_Mobile} ${rightContainer_Web}`}>
        <div className={`${UserClass_Mobile} ${UserClass_Web}`}>
          <img src='https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png' alt='user' className={UserIcon}/>
        </div>
      </div>

    </div>
  )
}

export default Navbar; 
import React from 'react'; 
import { Conference } from '../../database/Conference'

// Component Styling

const Navbarlass_Mobile = 'w-full flex flex-col flex-wrap justify-between py-4';
const Navbarlass_Web = 'lg:flex-row lg:justify-between...';

const Container_Mobile = 'w-full';
const leftContainer_Web = 'flex justify-start lg:w-3/12 ...';
const centerContainer_Web = 'invisible lg:visible flex justify-center lg:w-6/12 lg:space-y-1 ...';
const rightContainer_Web = 'invisible lg:visible flex justify-end lg:w-3/12 ...';

const LogoClass_Mobile = 'flex flex-row space-x-1 items-center';
const LogoClass_Web = '';

const MenuClass_Mobile = 'w-3/12 ...';
const MenuClass_Web = 'lg:text-center';

const UserClass_Mobile = '';
const UserClass_Web = '';

const LogoIcon = 'w-1/12';
const LogoMark = 'w-3/12';

const body = 'text-gray-400 text-sm font-light w-full tracking-wide leading-relaxed';
const bodyHover = 'hover:text-pink-400';

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

      <div className={`${Container_Mobile} ${centerContainer_Web}`}>
        <div className={`${MenuClass_Mobile} ${MenuClass_Web}`}>
          <a className={`${body} ${bodyHover}`} href='/Watch-On-Demand'>watch on-demand</a>
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
          user icon
        </div>
      </div>

    </div>
  )
}

export default Navbar; 
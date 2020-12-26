import React from 'react'; 

// Component Styling

const FooterClass_Mobile = 'bg-black w-full flex flex-col flex-wrap justify-between py-4 space-y-8';
const FooterClass_Web = 'lg:space-y-0 lg:flex-row lg:justify-between...';

const Container_Mobile = 'w-full items-center justify-center';
const leftContainer_Web = 'flex justify-start lg:w-8/12 ...';
const rightContainer_Web = 'flex justify-end lg:w-3/12 ...';

const LogoClass_Mobile = 'flex flex-col items-center space-x-4 space-y-3 text-center';
const LogoClass_Web = 'lg:flex-row';

const MenuClass_Mobile = 'w-3/12 text-center ...';
const MenuClass_Web = '';


const LogoIcon = 'w-3/12 lg:w-1/12';

const body = 'text-gray-400 text-sm font-light w-full tracking-wide leading-relaxed';
const bodyHover = 'hover:text-pink-300';
const hrOpacity = 'opacity-25';
const footer = 'mt-32';

// Component Layout

const Footer = () => {
  return (
    <div className={footer}>
      <hr className={hrOpacity}/>
      <div className={`${FooterClass_Mobile} ${FooterClass_Web}`}>
        <div className={`${Container_Mobile} ${leftContainer_Web}`}>
            <a className={`${LogoClass_Mobile} ${LogoClass_Web}`} href='https://cosmos.network/' target='_blank'>
              <img src={'https://cosmos.network/images/logos/cosmos-logo-white.png'} alt='Logo'className={LogoIcon}/>
              <p className={`${body}`}>Copyright © 2020. All rights reserved.</p>
            </a>
        </div>

        <div className={`${Container_Mobile} ${rightContainer_Web}`}>
          <div className={`${MenuClass_Mobile} ${MenuClass_Web}`}>
            <a className={`${body} ${bodyHover}`} href='/Terms'>Terms</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer; 
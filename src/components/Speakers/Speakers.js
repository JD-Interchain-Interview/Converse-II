import React from 'react'; 
import { Speakers } from '../../database/Speakers';

// Component Styling

const SpeakersClass_Mobile = 'grid grid-cols-2 gap-7 p-3 ';
const SpeakersClass_Web = 'sm:p-10 sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-7 sm:space-y-0';

const card_Mobile = 'border border-gray-700 hover:border-blue-400 bg-gray-900 flex flex-col';
const card_Web = '';

const card_hover = 'transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:bg-[] hover:opacity-80'; 


const header = 'text-6xl py-10 pt-24';

const ProfileImage = 'border border-gray-700 w-full object-contain rounded-[]';
const ProfileDescription = 'p-5 space-y-2';
const ProfileTitle = 'text-gray-600';
const ProfileCompany = 'text-gray-300 text-sm font-light';

const gradient = 'bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-pink-500';
const hrOpacity = 'opacity-25'; 

const SpeakersPage = () => {
  return (
    <div>
      <h1 className={`${header} ${gradient}`}>Speakers</h1>
      <p>Hear from speakers coming live to your screen from around the world.</p>
      <br/>
      <hr className={hrOpacity}/>
      <br/>

      <div className={`${SpeakersClass_Mobile} ${SpeakersClass_Web}`}>
        {Speakers.map((person) => (
          <div className={`${card_Mobile} ${card_Web} ${card_hover}`}>
            <img src={person.profile} alt={person.name} className={ProfileImage}/>

            <div className={ProfileDescription}>
              <p>{person.name}</p>
              <p className={ProfileTitle}>{person.title}</p>
              <p className={ProfileCompany}>@ {person.company.name}</p>
            </div>  
          
          </div>
        ))}        
      </div>



    </div>
  )
}

export default SpeakersPage; 
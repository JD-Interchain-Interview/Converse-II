import React from 'react'; 
import { coOrganizer , Sponsors, Companies } from '../../database/Companies';

// Component Styling

const CompaniesClass_Mobile = 'grid grid-cols-2 gap-12 p-3 ';
const CompaniesClass_Web = 'sm:p-10 sm:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6[] sm:gap-10 sm:space-y-0';

const card_Mobile = 'border border-gray-700 hover:border-blue-400 bg-gray-900 flex flex-row rounded-lg p-5 items-center';
const card_Web = '';

const card_hover = 'transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:bg-[] hover:opacity-80'; 


const header = 'text-4xl py-10 pt-24';

const Logo = ' w-4/12 object-contain rounded-full object-contain';
const CompanyDescription = 'p-5 space-y-2';

const gradient = 'bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-pink-500';
const hrOpacity = 'opacity-25'; 

const Expo = () => {
  return (
    <div>
      <h1 className={`${header} ${gradient}`}>Co-Organizer</h1>
      <p>Thank you to our co-organizer!</p>

      <br/>
      <hr className={hrOpacity}/>
      <br/>

      <div className={`${CompaniesClass_Mobile} ${CompaniesClass_Web}`}>
        {coOrganizer.map((company) => (
          <a href={company.link} target='_blank'>
          <div className={`${card_Mobile} ${card_Web} ${card_hover}`}>
            <img src={company.logo} alt={company.name} className={Logo}/>

            <div className={`${CompanyDescription} ${gradient}`}>
              <p>{company.name}</p>
            </div>  
          
          </div>
          </a>
        ))}        
      </div>

      {/* --------------------------------------------------- */}

      <h1 className={`${header} ${gradient}`}>Sponsors</h1>
      <p>Learn more about our event sponsors.</p>

      <br/>
      <hr className={hrOpacity}/>
      <br/>

      <div className={`${CompaniesClass_Mobile} ${CompaniesClass_Web}`}>
        {Sponsors.map((company) => (
          <a href={company.link} target='_blank'>
          <div className={`${card_Mobile} ${card_Web} ${card_hover}`}>
            <img src={company.logo} alt={company.name} className={Logo}/>

            <div className={`${CompanyDescription} ${gradient}`}>
              <p>{company.name}</p>
            </div>  
          
          </div>
          </a>
        ))}        
      </div>

      {/* --------------------------------------------------- */}

      <h1 className={`${header} ${gradient}`}>Community</h1>
      <p>Click any logo to explore what they're working on.</p>

      <br/>
      <hr className={hrOpacity}/>
      <br/>

      <div className={`${CompaniesClass_Mobile} ${CompaniesClass_Web}`}>
        {Companies.map((company) => (
          <a href={company.link} target='_blank'>
          <div className={`${card_Mobile} ${card_Web} ${card_hover}`}>
            <img src={company.logo} alt={company.name} className={Logo}/>

            <div className={`${CompanyDescription} ${gradient}`}>
              <p>{company.name}</p>
            </div>  
          
          </div>
          </a>
        ))}        
      </div>

    </div>
  )
}

export default Expo; 


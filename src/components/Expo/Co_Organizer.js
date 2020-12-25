import React from 'react'; 
import { coOrganizer } from '../../database/Companies';


// Component Styling

import { CompaniesClass_Mobile, CompaniesClass_Web, card_Mobile, card_Web, card_hover, header, Logo, CompanyDescription, gradient, hrOpacity} from './CompaniesClass'; 

// Component Layout 

const Co_Organizer = () => {
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
    </div>
  )
}

export default Co_Organizer; 


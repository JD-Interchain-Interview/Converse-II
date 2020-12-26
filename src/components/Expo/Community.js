import React from 'react'; 
import { Companies } from '../../database/Companies';


// Component Styling

import { CompaniesClass_Mobile, CompaniesClass_Web, card_Mobile, card_Web, card_hover, header, Logo, CompanyDescription, gradient, hrOpacity} from './CompaniesClass'; 

// Component Layout 

const Community = () => {
  return (
    <div>
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

            <div className={`${CompanyDescription}`}>
              <p>{company.name}</p>
            </div>  
          
          </div>
          </a>
        ))}        
      </div>

    </div>
  )
}

export default Community; 


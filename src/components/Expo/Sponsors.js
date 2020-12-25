import React from 'react'; 
import { Sponsors } from '../../database/Companies';


// Component Styling

import { CompaniesClass_Mobile, CompaniesClass_Web, card_Mobile, card_Web, card_hover, header, Logo, CompanyDescription, gradient, hrOpacity} from './CompaniesClass'; 

// Component Layout 

const SponsorsPage = () => {
  return (
    <div>
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
    </div>
  )
}

export default SponsorsPage; 


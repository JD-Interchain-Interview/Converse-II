import React from 'react'; 

// Component Styling

const TermsClass_Mobile = 'w-full h-full';
const TermsClass_Web = '';

const header = 'text-6xl py-10 pt-24';
const subheader = 'text-3xl py-10';
const body = 'text-gray-50 text-md font-light w-full lg:w-7/12 tracking-wide leading-relaxed';

const gradient = 'bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-pink-500';

const hrOpacity = 'opacity-25'; 

// Component Layout

const Terms = () => {
  return (
    <div className={`${TermsClass_Mobile} ${TermsClass_Web}`}>
      <h1 className={`${header} ${gradient}`}>Terms</h1>
      <p className={subheader}>Don't Trust, Verify :) <br/> <br/> We Are Not Giving Financial Advice.</p>

      <br/>
      <hr className={hrOpacity}/>
      <br/>
      

      <p>General Disclaimer</p>
      <br/>
      <br/>
      <p className={body}>
        Under no circumstances should any material, information, or statements provided during the "Interchain Conversations" virtual conference be construed or considered as an offer to sell or a solicitation of any offer to buy, hold, or stake, an interest in any securities, investment funds, digital asset, or investment contract. The information provided during the "Interchain Conversations" virtual conference, including any presentations, videos, demonstrations, or information is not intended to promote the products or services of third parties and is provided solely as technical information. All in Bits Inc (DBA Tendermint Inc) and Dystopia Labs does not render or offer to render personalized financial, investment, tax, legal or accounting advice, thus under no circumstances should any material, information, or statements provided during the "Interchain Conversations" virtual conference be construed or considered as financial, investment, tax, legal or accounting advice. All in Bits Inc (DBA Tendermint Inc) and Dystopia Labs do not sponsor, approve, or promote the financial products, services, or securities of Third Parties involved in, participating in, or presenting at the "Interchain Conversations" virtual conference. All in Bits Inc (DBA Tendermint Inc) and Dystopia Labs do not act as a manager or fund marketer, adviser or agent, (ii) is not authorized to bind, or act on behalf of, or to make representations for any Third Parties involved in, participating in, or presenting at the "Interchain Conversations" virtual conference. By registering for this, you authorize Dystopia Labs to share your information with All in Bits Inc (DBA Tendermint Inc) and All in Bits Inc can use the personal information provided for marketing purposes.
      </p>

      <br/>
      <br/>
      <br/>

      <p>Forward Looking Statements</p>
      <br/>
      <br/>
      <p className={body}>
        All statements other than statements of historical fact provided during the "Interchain Conversations" virtual conference are forward-looking statements and include statements and assumptions relating to: plans and objectives of management for future operations or economic performance; conclusions and projections about current and future economic and political trends and conditions; and projected financial results and results of operations. These statements can generally be identified by the use of forward-looking terminology including "may," "believe," "will," "expect," "anticipate," "estimate," "continue", "rankings," “intend,” “outlook,” “potential,” or other similar words. All in Bits Inc (DBA Tendermint Inc) and Dystopia Labs do not make any guarantees, representations or warranties (express or implied) about the accuracy of such forward-looking statements, on behalf of itself or on behalf of any Third Party.
      </p>
      
    </div>
  )
}

export default Terms; 
import React from 'react'; 
import { Router, Route, Switch } from 'react-router-dom'; 
import './styles/main.css';

//// Utilities / Store

import history from './utills/history';

// Components

import Navbar from './components/Navbar';
import Home from './components/Home';
import WatchOnDemand from './components/WatchOnDemand';
import Schedule from './components/Schedule'; 
import Speakers from './components/Speakers'; 
import Expo from './components/Expo'; 

// Component Styling

const AppClass = 'bg-black text-gray-50 w-screen'; 
const container = 'xl:container xl:mx-auto';
const hrOpacity = 'opacity-25'; 

function App() {
  return (
    <Router history={history}>
      <div className={AppClass}>
        <div className={container}>
          <Navbar/>
          <hr className={hrOpacity}/>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>

            <Route path='/Watch-On-Demand'><WatchOnDemand/></Route>
            <Route path='/Schedule'><Schedule/></Route>
            <Route path='/Speakers'><Speakers/></Route>
            <Route path='/Expo'><Expo/></Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;

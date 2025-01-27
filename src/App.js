import React from 'react'; 
import { Router, Route, Switch } from 'react-router-dom'; 
import './styles/main.css';

// Utilities

import history from './utils/history';

// Components

import Navbar from './components/Navbar';
import Particle from './components/Particle';
import Home from './components/Home';
import WatchOnDemand from './components/WatchOnDemand';
import Schedule from './components/Schedule'; 
import Speakers from './components/Speakers'; 
import Expo from './components/Expo'; 
import Terms from './components/Terms'; 
import Footer from './components/Footer';

// Component Styling

const AppClass = 'bg-black text-gray-50 w-screen'; 
const container = 'xl:container xl:mx-auto p-5';
const hrOpacity = 'opacity-25'; 

// Component Layout

function App() {
  return (
    <Router history={history}>
      <div className={AppClass}>
        <div className={container}>
          <Navbar/>
          <hr className={hrOpacity}/>
          
          <Switch>
            <Route exact path='/'>
              <br/>
              <Particle/>
              <Home/>
            </Route>

            <Route path='/Watch-On-Demand'><WatchOnDemand/></Route>
            <Route path='/Schedule'><Schedule/></Route>
            <Route path='/Speakers'><Speakers/></Route>
            <Route path='/Expo'><Expo/></Route>
            <Route path='/Terms'><Terms/></Route>
          </Switch>

          <Footer/>
        </div>
      </div>
    </Router>
    
  );
}

export default App;

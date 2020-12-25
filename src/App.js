import React from 'react'; 
import { Router, Route, Switch } from 'react-router-dom'; 
import './styles/main.css';

//// Utilities / Store

import history from './utills/history';
import Particles from "react-tsparticles";

// Components

import Navbar from './components/Navbar';
import Home from './components/Home';
import WatchOnDemand from './components/WatchOnDemand';
import Schedule from './components/Schedule'; 
import Speakers from './components/Speakers'; 
import Expo from './components/Expo'; 

// Component Styling

const AppClass = 'bg-black text-gray-50 w-screen'; 
const container = 'xl:container xl:mx-auto p-5';
const hrOpacity = 'opacity-25'; 
const HomeClass = 'z-50';

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
              <Particles
                id="tsparticles"
                options={{
                  background: {
                    color: {
                      value: "",
                    },
                  },
                  fpsLimit: 60,
                  interactivity: {
                    detectsOn: "canvas",
                    events: {
                      onClick: {
                        enable: true,
                        mode: "push",
                      },
                      onHover: {
                        enable: true,
                        mode: "repulse",
                      },
                      resize: true,
                    },
                    modes: {
                      bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                      },
                      push: {
                        quantity: 4,
                      },
                      repulse: {
                        distance: 200,
                        duration: 0.4,
                      },
                    },
                  },
                  particles: {
                    color: {
                      value: "#F8B7FF",
                    },
                    links: {
                      color: "#B7F2FF",
                      distance: 150,
                      enable: true,
                      opacity: 0.5,
                      width: 1,
                    },
                    collisions: {
                      enable: true,
                    },
                    move: {
                      direction: "none",
                      enable: true,
                      outMode: "bounce",
                      random: false,
                      speed: 6,
                      straight: false,
                    },
                    number: {
                      density: {
                        enable: true,
                        value_area: 800,
                      },
                      value: 80,
                    },
                    opacity: {
                      value: 0.5,
                    },
                    shape: {
                      type: "circle",
                    },
                    size: {
                      random: true,
                      value: 5,
                    },
                  },
                  detectRetina: true,
                }}
              />
              <Home/>
              <br/>
              <p>virtual summit</p>
              <br/>
              <hr className={hrOpacity}/>
              <br/>
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

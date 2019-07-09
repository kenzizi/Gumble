import React from 'react';
import './App.css';
import Head from './components/head'
import Eye1 from './components/Eye1'
import Eye2 from './components/Eye2'
import Mouth from './components/Mouth'
import Eyebrow1 from './components/EyeBrow1'
import Eyebrow2 from './components/EyeBrow2'
import Noise from './components/noise'
import Ear1 from './components/ear1'
import Ear2 from './components/ear2'
import Body from './components/body'
import Hand1 from './components/Hand1'
import Hand2 from './components/hand2'
import Leg1 from './components/leg1'
import Leg2 from './components/leg2'
import By from './components/by'




function App() {
  return (
    <div className="App">
      <By/>
     <Head />
     <Eye1 />
     <Eye2 />
     <Mouth />
     <Eyebrow1 />
     <Eyebrow2 />
     <Noise />
     <Ear1 />
     <Ear2 />
     <Body />
     <Hand1 />
     <Hand2 />
     <Leg1 />
     <Leg2 />
    </div>
  );
}

export default App;

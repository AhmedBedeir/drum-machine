import { useState } from 'react';
import './App.css';
import Pad from './components/Pad';
import audio1 from './assets/audio/Heater-1.mp3';
import audio2 from './assets/audio/Heater-2.mp3';
import audio3 from './assets/audio/Heater-3.mp3';
import audio4 from './assets/audio/Heater-4_1.mp3';
import audio5 from './assets/audio/Heater-6.mp3';
import audio6 from './assets/audio/Dsc_Oh.mp3';
import audio7 from './assets/audio/Kick_n_Hat.mp3';
import audio8 from './assets/audio/RP4_KICK_1.mp3';
import audio9 from './assets/audio/Cev_H2.mp3';

function App() {
  const [power, setPower] = useState(true);
  
  return (
    <>
      <h1>Drum Machine</h1>
      <div id="drum-machine">
        <div id="display">....</div>
        <div className="all-drums-pad">
          <Pad audioName={'Heater-1'} audioValue={'Q'} audioSrc={audio1} />
          <Pad audioName={'Heater-2'} audioValue={'W'} audioSrc={audio2} />
          <Pad audioName={'Heater-3'} audioValue={'E'} audioSrc={audio3} />
          <Pad audioName={'Heater-4'} audioValue={'A'} audioSrc={audio4} />
          <Pad audioName={'Heater-6'} audioValue={'S'} audioSrc={audio5} />
          <Pad audioName={'Dsc_Oh'} audioValue={'D'} audioSrc={audio6} />
          <Pad audioName={'Kick_n_Hat'} audioValue={'Z'} audioSrc={audio7} />
          <Pad audioName={'RP4_KICK_1'} audioValue={'X'} audioSrc={audio8} />
          <Pad audioName={'Cev_H2'} audioValue={'C'} audioSrc={audio9} />
        </div>
      </div>
    </>
  );
}

export default App;

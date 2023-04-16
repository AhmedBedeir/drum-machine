import React, {useEffect} from 'react';


function Pad(props) {
  function playAudio() {
    const audio = document.getElementById(props.audioValue);
    audio.currentTime = 0;
    audio.play();
    const display = document.getElementById('display');
    display.innerText = props.audioName;
  }


  // handle keydown event for each pad button and make it active when pressed 
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key.toUpperCase() === props.audioValue) {
        playAudio();
        const button = document.getElementById(props.audioName);
        button.classList.add('active');
        setTimeout(() => {
          button.classList.remove('active');
        }, 100);
      }
    });
  }, []);



  return (
    <button onClick={playAudio} id={props.audioName} className="drum-pad">
      {props.audioValue}
      <audio
        className="clip"
        id={props.audioValue}
        src={props.audioSrc}
      ></audio>
    </button>
  );
}

export default Pad;

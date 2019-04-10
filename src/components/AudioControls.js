import React from 'react';
import './AudioControls.css';

const AudioControls = (props) => {
	return(
		<button className="audio-control" onClick={toggleButton}>PLAY</button>
	);
}

const toggleButton = (event) => {
	const btnEl = event.target;
	if( btnEl.textContent === "PLAY" ){
		btnEl.textContent = "PAUSE";
	} else {
		btnEl.textContent = "PLAY";
	}
};

export default AudioControls;

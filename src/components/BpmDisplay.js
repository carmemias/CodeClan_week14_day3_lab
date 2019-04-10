import React from 'react';
import './BpmDisplay.css';

const BpmDisplay = (props) => {
	return(
		<div className="bpm-display">
		<span className="value">{props.bpm}</span> BPM
		</div>
	);
}

export default BpmDisplay;

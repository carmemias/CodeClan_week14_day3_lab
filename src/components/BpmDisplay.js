import React from 'react';
import './BpmDisplay.css';

const BpmDisplay = (props) => {
	return(
		<div className="bpm-display">
		{props.bpm} BPM
		</div>
	);
}

export default BpmDisplay;

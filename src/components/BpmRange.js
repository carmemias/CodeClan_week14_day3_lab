import React from 'react';
import "./BpmRange.css";

function BpmRange(props){
	const {bpm, setBpm, showBpmChange} = props;

	function takeOffOne(event){
		event.preventDefault();
		let currentBPM = bpm;
		if(currentBPM > 40){
			setBpm(currentBPM - 1);
			showBpmChange(currentBPM - 1);
		}
	}

	function addOne(event){
		event.preventDefault();
		let currentBPM = bpm;
		if(currentBPM < 218){
			setBpm(currentBPM + 1);
			showBpmChange(currentBPM + 1);
		}
	}

	function handleRangeChange(event){
		event.preventDefault();
		let newBpm = parseInt(event.target.value);
		setBpm(newBpm);
		showBpmChange(newBpm);
	}

	return (
		<div className="slider">
		<button className="take-off-one" onClick={takeOffOne}>-</button>
		<input type="range" name="bpm" min="40" max="218" step="1" value={bpm} onChange={handleRangeChange}/>
		<button className="add-one" onClick={addOne}>+</button>
		</div>
	);
}

export default BpmRange;

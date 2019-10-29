import React from 'react';
import "./BpmRange.css";

function BpmRange(props){
	const {bpm, setBpm} = props;

	function takeOffOne(){
		if(bpm > 40){
			setBpm(prevBpm => prevBpm - 1);
		}
	}

	function addOne(){
		if(bpm < 218){
			setBpm(prevBpm => prevBpm + 1);
		}
	}

	function handleRangeChange(event){
		setBpm(parseInt(event.target.value));
	}

	return (
		<div className="slider">
		<button className="take-off-one" onClick={() => takeOffOne()}>-</button>
		<input type="range" name="bpm" min="40" max="218" step="1" value={bpm} onChange={handleRangeChange}/>
		<button className="add-one" onClick={() => addOne()}>+</button>
		</div>
	);
}

export default BpmRange;

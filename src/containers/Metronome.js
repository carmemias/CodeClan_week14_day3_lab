import React, { useState, useEffect } from 'react';
import BpmRange from '../components/BpmRange.js';
import BpmDisplay from '../components/BpmDisplay.js';
import AudioControls from '../components/AudioControls.js';
import './Metronome.css';

function Metronome(){
	const [bpm, setBpm] = useState(40);
	//TODO delay does not need to be a separate state
	const [delay, setDelay] = useState(1500);

	useEffect(()=>{
		let newRGB = "rgb( " + bpm + ", 210, 113)";
		let playBtn = document.querySelector('.audio-control');
		playBtn.style.backgroundColor = newRGB;

		let addBtn = document.querySelector('.add-one');
		addBtn.style.color = newRGB;

		let takeOffBtn = document.querySelector('.take-off-one');
		takeOffBtn.style.color = newRGB;
	});

	function showBpmChange(newBpm){
		let newDelay = Math.floor(60000/newBpm);
		setBpm(newBpm);
		setDelay(newDelay);
	}

	return (
				<div className="metronome">
				<BpmDisplay bpm={bpm}/>
				<AudioControls delay={delay}/>
				<BpmRange bpm={bpm} setBpm={setBpm} showBpmChange={showBpmChange}/>
				</div>
			);
}

export default Metronome;

import React, { useState, useEffect } from 'react';
import BpmRange from '../components/BpmRange.js';
import BpmDisplay from '../components/BpmDisplay.js';
import AudioControls from '../components/AudioControls.js';
import './Metronome.css';

function Metronome(){
	const [bpm, setBpm] = useState(40);

	useEffect(()=>{
		let newRGB = "rgb( " + bpm + ", 210, 113)";
		let playBtn = document.querySelector('.audio-control');
		playBtn.style.backgroundColor = newRGB;

		let addBtn = document.querySelector('.add-one');
		addBtn.style.color = newRGB;

		let takeOffBtn = document.querySelector('.take-off-one');
		takeOffBtn.style.color = newRGB;
	});

	return (
		<div className="metronome">
		<BpmDisplay bpm={bpm}/>
		<AudioControls delay={Math.floor(60000/bpm)}/>
		<BpmRange bpm={bpm} setBpm={setBpm}/>
		</div>
	);
}

export default Metronome;

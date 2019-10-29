import React from 'react';
import useBpm from '../hooks/useBpm.js';
import BpmRange from '../components/BpmRange.js';
import BpmDisplay from '../components/BpmDisplay.js';
import AudioControls from '../components/AudioControls.js';
import './Metronome.css';

function Metronome({initialBpm}){
	const [bpm, setBpm] = useBpm(initialBpm);

	return (
		<div className="metronome">
			<BpmDisplay bpm={bpm}/>
			<AudioControls delay={Math.floor(60000/bpm)}/>
			<BpmRange bpm={bpm} setBpm={setBpm}/>
		</div>
	);
}

export default Metronome;

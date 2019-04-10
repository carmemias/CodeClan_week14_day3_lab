import React, { Component } from 'react';
import BpmRange from '../components/BpmRange.js';
import BpmDisplay from '../components/BpmDisplay.js';
import AudioControls from '../components/AudioControls.js';

class Metronome extends Component {
	constructor(props){
		super(props);
		this.state = {
			bpm: 40,
			delay: 1500
		}

		this.showBpmChange = this.showBpmChange.bind(this);

	}

	showBpmChange(newBpm){
		this.setState({bpm: newBpm});
		this.setState( { delay: Math.floor(60000/newBpm) } );
	}

	render(){
		return (
			<div className="metronome">
			<BpmDisplay bpm={this.state.bpm}/>
			<AudioControls/>
			<BpmRange bpm={this.state.bpm} showBpmChange={this.showBpmChange}/>
			</div>
		);
	}
}

export default Metronome;

import React, { Component } from 'react';
import BpmRange from '../components/BpmRange.js';
import BpmDisplay from '../components/BpmDisplay.js';
import AudioControls from '../components/AudioControls.js';
import './Metronome.css';

class Metronome extends Component {
	constructor(props){
		super(props);
		this.state = {
			bpm: 40,
			delay: 1500
		}

		this.showBpmChange = this.showBpmChange.bind(this);
		this.changeBackgroundColor = this.changeBackgroundColor.bind();
	}

	showBpmChange(newBpm){
		this.setState({bpm: newBpm});
		this.setState( { delay: Math.floor(60000/newBpm) } );

		this.changeBackgroundColor(newBpm);
	}

	changeBackgroundColor(redLevel){
		let newRGB = "rgb( " + redLevel + ", 210, 113)";
		let playBtn = document.querySelector('.audio-control');
		playBtn.style.backgroundColor = newRGB;

		let addBtn = document.querySelector('.add-one');
		addBtn.style.color = newRGB;

		let takeOffBtn = document.querySelector('.take-off-one');
		takeOffBtn.style.color = newRGB;
	}

	render(){
		return (
			<div className="metronome">
			<BpmDisplay bpm={this.state.bpm}/>
			<AudioControls delay={this.state.delay}/>
			<BpmRange bpm={this.state.bpm} showBpmChange={this.showBpmChange}/>
			</div>
		);
	}
}

export default Metronome;

import React, { Component } from 'react';
import "./BpmRange.css";

class BpmRange extends Component {
	constructor(props){
		super(props);
		this.state = {
			bpm: null
		}
		this.handleRangeChange = this.handleRangeChange.bind(this);
		this.takeOffOne = this.takeOffOne.bind(this);
		this.addOne = this.addOne.bind(this);
	}

	handleRangeChange(event){
		event.preventDefault();
		let newBpm = parseInt(event.target.value);
		this.setState({bpm: newBpm});
		this.props.showBpmChange(newBpm);
	}

	takeOffOne(event){
		event.preventDefault();
		let currentBPM = this.props.bpm;
		if(currentBPM > 40){
			this.setState({bpm: currentBPM - 1});
			this.props.showBpmChange(currentBPM - 1);
		}
	}

	addOne(event){
		event.preventDefault();
		let currentBPM = this.props.bpm;
		if(currentBPM < 218){
			this.setState({bpm: currentBPM + 1});
			this.props.showBpmChange(currentBPM + 1);
		}
	}

	render(){
		return (
			<div className="slider">
			<button className="take-off-one" onClick={this.takeOffOne}>-</button>
			<input type="range" name="bpm" min="40" max="218" step="1" onChange={this.handleRangeChange}/>
			<button className="add-one" onClick={this.addOne}>+</button>
			</div>
		);
	}
}

export default BpmRange;

import React, { Component } from 'react';

class BpmRange extends Component {
	constructor(props){
		super(props);
		this.state = {
			bpm: null
		}
		this.handleRangeChange = this.handleRangeChange.bind(this);
	}

	handleRangeChange(event){
		event.preventDefault();
		this.setState({bpm: event.target.value});
		this.props.showBpmChange(event.target.value);
	}

	render(){
		return (
			<input type="range" name="bpm" min="40" max="218" step="1" onChange={this.handleRangeChange}/>
		);
	}
}

export default BpmRange;

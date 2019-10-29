import {useState, useEffect} from 'react';

function useBpm(){
	const [bpm, setBpm] = useState(40);

	useEffect(()=>{
		let newRGB = `rgb(${bpm}, ${(256 - bpm)/2}, 210)`;
		let playBtn = document.querySelector('.audio-control');
		playBtn.style.backgroundColor = newRGB;

		let addBtn = document.querySelector('.add-one');
		addBtn.style.color = newRGB;

		let takeOffBtn = document.querySelector('.take-off-one');
		takeOffBtn.style.color = newRGB;
	});

	return [bpm, setBpm];
}

export default useBpm;

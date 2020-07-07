import React from 'react';
import '../component/Slider.scss';
function Slider() {
	//Creating an array of items

	let slideArr = [1, 2, 3, 4, 5];

	return (
		<div className="slider">
			{slideArr.map((item, index) => {
				return (
					<div key={index} className="slide">
						{item}
					</div>
				);
			})}
			<button id="goLeft">Left</button>
			<button id="goRight">Right</button>
		</div>
	);
}
export default Slider;

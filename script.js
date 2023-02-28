//make a grid of 16x16 div
//Add a red border to the grid and blue border to each div

//make one div
const makeDiv = () => {
	const div = document.createElement('div');
	const body = document.querySelector('body .grid-container');
	body.appendChild(div);
}

for(let i = 0; i<16; i++) {
	for(let j = 0; j<16; j++) {
		makeDiv();
	}
}
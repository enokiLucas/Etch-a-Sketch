//make a grid of 16x16 div
//Add a red border to the grid and blue border to each div

//make one div
const makeDiv = (text, className) => {
	const div = document.createElement('div');
	const bodyGridContainer = document.querySelector('body .grid-container');
	bodyGridContainer.appendChild(div);
	div.className = className;
	div.textContent = text;
}


for(let i = 0; i<16; i++) {
	for(let j = 0; j<16; j++) {
		makeDiv((i+1) +'x'+ (j+1), 'grid-item');
	}
}

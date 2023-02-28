//make a grid of 16x16 div
//Add a red border to the grid and blue border to each div

//make one div
const makeDiv = () => {
	const div = document.createElement('div');
	const bodyGridContainer = document.querySelector('body .grid-container');
	bodyGridContainer.appendChild(div);
	div.textContent ='Hello';
}

makeDiv();
/*
for(let i = 0; i<16; i++) {
	for(let j = 0; j<16; j++) {
		makeDiv();
	}
}
*/
console.clear();


// outsome 16x16 grid of square divs - make thme appear as grid not in a line

// put them in a container div which is in the html


// use a for loop to iterate through from 1 to 16
// in the for loop create a div and append it to the grid container
// add a class name to each div

const container = document.getElementById('grid-container');

function createGridSquare(number) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add(`grid-square`);
    gridSquare.textContent = `${number + 1}`;
    return gridSquare;
}

for (let i = 0; i < 16 * 16; i++) {
    container.appendChild(createGridSquare(i));
}

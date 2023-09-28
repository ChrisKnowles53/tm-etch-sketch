console.clear();

let numberOfPixels = 800;
const container = document.getElementById("container");
    container.setAttribute('style', `position: relative; top: 30px; outline:2px solid red; font-size: 0;margin:auto; height: ${numberOfPixels}px; width:${numberOfPixels}px; padding: 0; border: none;`);

const heading = document.createElement("h1");
    heading.innerText = "Etch Sketch by Chris Knowles";
    heading.setAttribute('style', 'margin-bottom: 0px;');
    container.insertAdjacentElement('beforebegin', heading);

const paragraph = document.createElement("p");
    paragraph.innerText = "Move your mouse over the grid and it will record where you have been.  If you want to start again click on new Grid, enter a value between 2 and 100 and click OK.";
    paragraph.setAttribute('style', `width: ${numberOfPixels}px; font-size: 20px`);

    container.insertAdjacentElement('beforebegin', paragraph);

const button = document.createElement("button");
    button.innerText = "New Grid ?";
    button.setAttribute('style', 'color: white; background-color: blue; font-size: 25px; border-radius: 10px;');
    container.insertAdjacentElement('beforebegin', button);

button.addEventListener('click', function () {
    const userInputValue = userInput();
     createGrid(userInputValue); // Call createGrid with the user input
    
});

function userInput() {
    let userInput;
    do {
        userInput = prompt("Please enter the size of the grid (2 to 100)");
    } while (userInput === null || userInput < 2 || userInput > 100);

    return userInput;
};

function clearGrid() {
    container.innerHTML = '';
};

function createGrid(number) {
    
    clearGrid();
    const maxGridWidth = numberOfPixels;
    const maxGridHeight = numberOfPixels;
    
    for (let rows = 0; rows < number; rows++) {
        for (let columns = 0; columns < number; columns++) {
            const div = document.createElement("div");
            div.className = "grid";
            container.appendChild(div);
        }
    }
    
    const gridElements = document.querySelectorAll(".grid");
    gridElements.forEach(function (eachDiv) {
        eachDiv.style.width = maxGridWidth / number + "px";
        eachDiv.style.height = maxGridHeight / number + "px";
    });
    
        
    const divs = document.getElementsByClassName('grid');
    
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener('mouseover', function (specificDiv) {
            specificDiv.target.style.backgroundColor = createRandomColor();
    
        });
    };
};
    
createGrid(25);

// random color change instead of red

//💭 could use math.random for each # xx xx xx
    //💥 would have to include letters and numbers for each 6 digits
//💭 us a loop to iterate through an array of values 6 times and add the corresponding index value to variable
const arrayOfColorFunctions = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

function createRandomColor() {
    let randomColorString = '#';
    for (let x = 0; x < 6; x++){
        let index = Math.floor(Math.random() * 16);
        let value = arrayOfColorFunctions[index];

        randomColorString += value;
    }
    return randomColorString;
}
createRandomColor();
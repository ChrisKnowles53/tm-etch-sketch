console.clear();

// add a button at the top asking new grid
// addEventlistner to button that prompts the user to enter a number
// validate the number is between 2 and 100 
// the number should thna create a new grid

const container = document.getElementById("container");
const button = document.createElement("button");
button.innerText = "New Grid ?";

container.insertAdjacentElement('beforebegin', button);

button.addEventListener('click', function () {
    const userInputValue = userInput();
    if (userInputValue !== null) {
        createGrid(userInputValue); // Call createGrid with the user input
    }
});

function userInput() {
    let userInput = prompt("Please enter the size of the grid 2 to 100");
    if (userInput < 2 || userInput > 100 || userInput === '') {
        userInput();
    } else {
        return userInput;
    }
}


function createGrid(number) {
    container.innerHTML = '';
    
        for (let rows = 0; rows < number; rows++) {
            for (let columns = 0; columns < number; columns++) {
                const div = document.createElement("div");
                div.className = "grid";
                container.appendChild(div);
            }
        }
        
        const gridElements = document.querySelectorAll(".grid");
        gridElements.forEach((element) => {
            element.style.width = 800 / number + "px";
            element.style.height = 800 / number + "px";
        });
        const divs = document.getElementsByClassName('grid');
        
        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('mouseover', function (specificDiv) {
                specificDiv.target.style.backgroundColor = 'red';
        
            });
        }
    }
    
    createGrid(userInput());
    
    
    
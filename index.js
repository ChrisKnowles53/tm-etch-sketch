console.clear();

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
    let userInput;
    do {
        userInput = prompt("Please enter the size of the grid (2 to 100)");
    } while (userInput === null || userInput === '' || userInput < 2 || userInput > 100);

    return userInput;
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
    
    
    
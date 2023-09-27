console.clear();

        
function createGrid(number) {
    const container = document.getElementById("container");
        
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
}
        
createGrid(30);

//hover states
// 💭 css .grid: hover {} will change the grid when the mouse is hovering over it
// 💭 can i use event listener to see if the mouse has hovered adn change the state of that particular div?
// what am i listening for - mouse over
// mouse over what - the specific div in the grid
    // will need to listen to all gird squares - need to loop the eventlistener through all the divs (think RPS loop over buttons)
// what to do - change background to red


const divs = document.getElementsByClassName('grid');

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('mouseover', function (specificDiv) {
        specificDiv.target.style.backgroundColor = 'red';

    });
}
function changeSquareColor(e){
    let red = Math.floor(Math.random()*250);
    let green = Math.floor(Math.random()*250);
    let blue = Math.floor(Math.random()*250);
    this.style.backgroundColor = `rgb(${red},${green},${blue})`;

}

function wipeBoard(allSquares){


    console.log("within the wipe board function");
    for(let i=0;i<allSquares-1;i++){

        allSquares[i].style.backgroundColor = "black";

    }

}




let rows = parseInt(prompt("how many rows would you like?"));
let columns =  parseInt(prompt("how many columns would you like?"));
const gridContainer = document.querySelector(".grid-container"); //contains the whole grid


for(let i=0;i<rows;i++){ //fills the grid to the required dimensions

    let gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");

    for(let j=0;j<columns;j++){

        var tempColumn = document.createElement("div");
        tempColumn.classList.add("grid-square");
        gridRow.appendChild(tempColumn);


    }

    gridContainer.appendChild(gridRow);

}

const allSquares = document.querySelectorAll(".grid-square");
console.log(allSquares);
allSquares.forEach((square) => square.addEventListener("mouseenter",changeSquareColor));
let wipeButton = document.querySelector(".wipe-button");

wipeButton.addEventListener("click", () => {


    
    allSquares.forEach((square) => square.style.backgroundColor = "black");


    


});


console.log("after for each");

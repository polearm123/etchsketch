function changeSquareColor(e){ //selects a random value in r,g,b for each pixel/square on the grid

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

function setGrid(rows,columns){

    const gridContainer = document.querySelector(".grid-container"); //contains the whole grid

    for(let i=0;i<rows;i++){ //fills the grid to the required dimensions

        let gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");

        for(let j=0;j<columns;j++){ //adds columns to corresponding row

            var tempColumn = document.createElement("div");
            tempColumn.classList.add("grid-square");
            tempColumn.style.backgroundColor = "black";
            gridRow.appendChild(tempColumn);


        }
        gridContainer.appendChild(gridRow); //adds row to corresponding container
    }

    }

function reset(){ //resets the grid on input from the user

    let rows = document.querySelectorAll(".grid-square");

    rows.forEach(e => e.parentNode.removeChild(e));

    let newRows = parseInt(prompt("how many rows would you like?"));
    let newColumns =  parseInt(prompt("how many columns would you like?"));
    
    setGrid(newRows,newColumns);

    const allSquares = document.querySelectorAll(".grid-square");

    allSquares.forEach((square) => square.addEventListener("mouseenter",changeSquareColor));

    let wipeButton = document.querySelector(".wipe-button");

    wipeButton.addEventListener("click", reset);
}




//logic of program starts here
//first the grid is reset and user defines the dimensions of the grid
//mouse over is added to each square, changing the color of each pixel/grid
//square on mouseover
//on button press this is repeated

reset(); 





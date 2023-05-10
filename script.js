
const container = document.querySelector(".gridContainer");

// making grid divs
/*const grid = document.createElement("div");
grid.classList.add("grid");
grid.textContent = "grid";

const grid2 = document.createElement("div");
grid2.classList.add("grid2");
grid2.textContent = "grid2";

container.appendChild(grid); */


 for (let i = 1; i <= 256; i++) {
    const grid = document.createElement("div");
    //grid.textContent = "grid";
    grid.classList.add("grid");
    //grid.setAttribute("onmouseenter", "changeBackground();");
    //grid.setAttribute("onmouseleave", "changeBackground2();");
    //grid.setAttribute("onmouseenter", "changeColor();")
    grid.addEventListener('mouseover', function(e){
        e.target.style.backgroundColor = "blue";
    })
    container.appendChild(grid);
    //grid.onmouseover = changeBackground();  
    


//function under only worked on a single random node

/*grid.addEventListener("onmouseover", (e) => {
    e.target.style.color = "blue";
} ) 

function changeBackground() {
    grid.style.color = "blue"; 
 }

 function changeBackground2() {
    grid.style.color = "black"; 
 } */


 } // for ending

 




 let gridButton = document.querySelector(".popUpButton");

 gridButton.addEventListener("click", () => {
    //container.removeChild(container.firstElementChild);
    let popUpMessage = prompt("Write number of squares per side for the grid");
    if ((/^[0-9]+$/.test(popUpMessage)) && (popUpMessage <= 100)) {
        console.log("pass");
        resetGrid();
        //popUpMessage = prompt("Write number of squares per side for the grid");

        for (let i = 1; i <= popUpMessage; i++) {
           for (let j = 1; j <= popUpMessage; j++) {
              i * j;
              const grid = document.createElement("div");
              //grid.textContent = "grid";
              grid.classList.add("grid");
              grid.addEventListener('mouseover', function(e){
                e.target.style.backgroundColor = "blue";
            })
              container.appendChild(grid);
           }
        }
    } // ending if

    else {
        console.log("fail")
        alert("write a not to big number");
    } 
 }) 


 function resetGrid () {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
 }




 // function under added effect on all nodes, nut need only one and one
 /*const grids = document.querySelectorAll("div");


 function changeColor() {
    grids.forEach(e => {
        e.style.color = "blue";
      })
 } */

 

 /*grids.addEventListener("onmouseover", (e) => {
    e.style.color = "blue";
     }); */


/*function changeBackground() {
   grid.style.color = "blue"; 
} */


//container.appendChild(grid);
//container.appendChild(grid2);


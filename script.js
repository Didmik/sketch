
const container = document.querySelector(".container");

// making grid divs
/*const grid = document.createElement("div");
grid.classList.add("grid");
grid.textContent = "grid";

const grid2 = document.createElement("div");
grid2.classList.add("grid2");
grid2.textContent = "grid2";

container.appendChild(grid); */


for(let i = 1; i <= 16; i++) {

    const grid = document.createElement("div");
    grid.textContent = "grid";
    grid.classList.add("grid");
    //grid.setAttribute("onmouseenter", "changeBackground();");
    //grid.setAttribute("onmouseleave", "changeBackground2();");
    //grid.setAttribute("onmouseenter", "changeColor();")
    container.appendChild(grid);
    //grid.onmouseover = changeBackground();
    


//function under only worked on a single random node

grid.addEventListener("onmouseover", (e) => {
    e.target.style.color = "blue";
} ) 

function changeBackground() {
    grid.style.color = "blue"; 
 }

 function changeBackground2() {
    grid.style.color = "black"; 
 } 



 } // for ending


 // function under added effect on all nodes, nut need only one and one
 const grids = document.querySelectorAll("div");


 function changeColor() {
    grids.forEach(e => {
        e.style.color = "blue";
      })
 } 

 

 /*grids.addEventListener("onmouseover", (e) => {
    e.style.color = "blue";
     }); */


/*function changeBackground() {
   grid.style.color = "blue"; 
} */


//container.appendChild(grid);
//container.appendChild(grid2);


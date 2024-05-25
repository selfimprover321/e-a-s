document.addEventListener("DOMContentLoaded", function everything() {
    let container = document.querySelector("section");
    const containerSize = 550;
    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;
;
    function makeGrid(size){
        for (let i = 0; i < (size ** 2); i++){
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare")
        squareSideLength = (containerSize/size);
        gridSquare.style.width = `${squareSideLength}px`;
        gridSquare.style.height = `${squareSideLength}px`;
        container.appendChild(gridSquare);}}
    function getSize(){
        let humanSize = parseInt(prompt("Given that the dimension of the grid is x by x, what would you want x to be? Note that side lengths can only be 1 - 100. Please give the square side length you would want in the textbox below."));
        if (((humanSize > 0) && (humanSize <= 100))){
            return humanSize;
        }
        else{
            alert("Please choose a number from 0 to 100.");
            everything();
        }
    }
    let color = "black";
    function erase(){
        let eraser = document.querySelector("#eraser");
        eraser.addEventListener("click", () => {
            color = "white";
            clickedRandomColor = false;
        })
    }
    function hover(){
        let gridSquares = document.querySelectorAll(".gridSquare");
        /*if (clickedRandomColor){
            gridSquares.forEach(square =>
            square.addEventListener("mouseover", function () {
                square.style.backgroundColor = randomColor();}))}
        else {
            gridSquares.forEach(square =>
            square.addEventListener("mouseover", function () {
                square.style.backgroundColor = color;})
            )}*/
        while (!clickedRandomColor){
            gridSquares.forEach(square =>
                square.addEventListener("mouseover", function () {
                    square.style.backgroundColor = color;}))
        }
        /*gridSquares.forEach(square =>
            square.addEventListener("mouseover", function () {
                square.style.backgroundColor = randomColor();}))*/

    }
    let clickedRandomColor = false;
    /*function randomColor(){
        let randomColor = document.querySelector("#randomColor");
        randomColor.addEventListener("click", () => {
            clickedRandomColor = true;
            function random_rgba() {
                var o = Math.round, r = Math.random, s = 255;
                return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
            };
        })
    }*/
    let wantedSize = getSize();
    makeGrid(wantedSize);
    hover();
    erase();
    //randomColor();
    const resetButton = document.querySelector("#reset");
    resetButton.addEventListener("click", function () {
        let gridSquares = document.querySelectorAll(".gridSquare");
        gridSquares.forEach(square =>
        square.style.backgroundColor = "white");
        clickedRandomColor = false;
        })
    const fullResetButton = document.querySelector("#fullReset");
    fullResetButton.addEventListener("click", function () {
        location.reload();
        })
    });

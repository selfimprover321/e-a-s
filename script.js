document.addEventListener("DOMContentLoaded", function everything() {
    let container = document.querySelector("section");
    const containerSize = 550;
    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;
    let humanSize = 16;
    function makeGrid(size){
        for (let i = 0; i < (size ** 2); i++){
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare")
        squareSideLength = (containerSize/size);
        gridSquare.style.width = `${squareSideLength}px`;
        gridSquare.style.height = `${squareSideLength}px`;
        container.appendChild(gridSquare);}}
        /*let humanSize = parseInt(prompt("Given that the dimension of the grid is x by x, what would you want x to be? Note that side lengths can only be 1 - 100. Please give the square side length you would want in the textbox below."));
        if (((humanSize > 0) && (humanSize <= 100))){
            return humanSize;
        }
        else{
            alert("Please choose a number from 0 to 100.");
            everything();
        }*/
    let range = document.querySelector("#range");
    range.addEventListener("change", function makeSize(event){
        let humanSize = event.target.value;
        let gridSquares = document.querySelectorAll(".gridSquare");
            gridSquares.forEach(square =>
                square.remove())
        makeGrid(humanSize);
        let sizeText = document.querySelector("#size");
        sizeText.textContent = `Size: ${humanSize} x ${humanSize}`;
        colorSquare(wantsRandomColor);
        randomColor();
        erase();

    })
    let color = "black";
    let wantsRandomColor = false;
    function erase(){
        let eraser = document.querySelector("#eraser");
        eraser.addEventListener("click", () => {
            color = "white";
            wantsRandomColor = false;
            colorSquare(wantsRandomColor);
        })
    }
    function colorSquare(x){
        if (x == true);{
            colorRandomColor();
        }
            hover(color);
    }
    function colorRandomColor(){
        let gridSquares = document.querySelectorAll(".gridSquare");
            gridSquares.forEach(square =>
                square.addEventListener("mouseover", function () {
                    square.style.backgroundColor = random_rgba();}))};
    function hover(color){
        let gridSquares = document.querySelectorAll(".gridSquare");
            gridSquares.forEach(square =>
                square.addEventListener("mouseover", function () {
                    square.style.backgroundColor = color;}))}
    
    function random_rgba() {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    };
    function randomColor(){
        wantsRandomColor = true;
        let randomColor = document.querySelector("#randomColor");
        randomColor.addEventListener("click", () => {
            colorRandomColor();
        })
    }
    const resetButton = document.querySelector("#reset");
    resetButton.addEventListener("click", function () {
        let gridSquares = document.querySelectorAll(".gridSquare");
        gridSquares.forEach(square =>
        square.style.backgroundColor = "white");
        wantsRandomColor = false;
        })
    const fullResetButton = document.querySelector("#fullReset");
    fullResetButton.addEventListener("click", function () {
        location.reload();
        })
    let black = document.querySelector("#black");
    black.addEventListener("click", function makeBlack(){
        color = "black";
        wantsRandomColor = "false";
        colorSquare(wantsRandomColor);
    })
    let choosingRgbColor = document.querySelector("#chooseColor");
    choosingRgbColor.addEventListener("input", function makeRgb(event){
        color = `${event.target.value}`;
        wantsRandomColor = "false";
        colorSquare(wantsRandomColor);
    })
    
    makeGrid(humanSize);
    colorSquare(wantsRandomColor);
    randomColor();
    erase();
    });

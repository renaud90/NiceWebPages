var colors;
var difficulty ='hard';
var squares = document.querySelectorAll('.square');
var gameOver 
var pickedColor
var reset = document.querySelector('#newGame');
var easy = document.querySelector('#easy');
var hard = document.querySelector('#hard');

hard.classList.add("selected");
newGame();

reset.addEventListener('click', function(){
    newGame();
})

easy.addEventListener('click', function(){
    this.classList.add("selected");
    hard.classList.remove("selected");
    if(difficulty == 'hard'){
        difficulty = 'easy';
        newGame();
    }
})
hard.addEventListener('click', function(){
    this.classList.add("selected");
    easy.classList.remove("selected");
    if(difficulty == 'easy'){
        difficulty = 'hard';
        newGame();
    }
}) 

// Functions

function generateRGB(){
    if(difficulty === 'easy'){
        var max = 3;
    }
    else{
        var max = 6;
    }
    for(var i = 0; i < max; i++){
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    var color = String('rgb(' + r + ', ' + g + ', ' + b + ')')
        colors.push(color)
    }
}

function distributeColors(){
    for(var i = 0; i < squares.length; i++){
        //add colors
        if(colors[i]){
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = 'none';
        }
        //add event listener
        squares[i].addEventListener('click', function(){
            //grab color of picked square
            var pick = this.style.backgroundColor;
            //if game is not over
            if(gameOver == false){
                //compare with the right color
                if(pick === pickedColor){
                    document.querySelector('#goodOrBad').innerHTML = "Correct";
                    changeColor();
                    gameOver = true;
                    document.querySelector('#newGame').innerHTML = "TRY AGAIN?";
                }
                else{
                    this.style.backgroundColor = "#232323";
                    document.querySelector('#goodOrBad').innerHTML = "Incorrect";
                }
            }
        })
    }
}

function changeColor(){
    //loop through all squares and change to the right color
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = pickedColor;
    }
    //change the color of the header
    document.querySelector('#header').style.backgroundColor = pickedColor;
}

function newGame(){
    gameOver = false;
    colors = [];
    document.querySelector('#header').style.backgroundColor = "rgb(0, 150, 255)";
    document.querySelector('#goodOrBad').innerHTML = "";
    document.querySelector('#newGame').innerHTML = "NEW COLORS";
    generateRGB();
    pickedColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('#goodColor').innerHTML = pickedColor.toUpperCase();
    distributeColors();
}
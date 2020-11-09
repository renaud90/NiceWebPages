var score1 = 0 ;
var score2 = 0 ;

var p1Button = document.querySelector('#p1');
var p2Button = document.querySelector('#p2');
var reset = document.querySelector('#reset');

p1Button.addEventListener('click', function(){
    score1++ ;
    console.log(score1);
    document.querySelector('#score1').innerHTML = score1;
})
p2Button.addEventListener('click', function(){
    score2++ ;
    document.querySelector('#score2').innerHTML = score2;
})
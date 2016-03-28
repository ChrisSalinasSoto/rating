var amountK = Math.ceil(Math.random());
var theClicks = document.getElementById('count');
var totalScore = amountK*Math.random();
var theRating = document.getElementById('rating');
var stars = document.querySelectorAll('.niks');


function colorStar(starNumber, procent) {
    var naam = 'ster' + starNumber;
    procent = Math.min(procent, 100);
    document.getElementById(naam).style.width = procent + '%';
}



function colorTheStar(rating){
    for(var i=1; i < 6; i++){
        colorStar(i, rating*100);
        rating --;
    }
}


//
function exports(){
    theClicks.innerHTML = amountK;
    theRating.innerHTML = Math.ceil(10*totalScore/amountK)/10;
    colorTheStar(Math.ceil(10*totalScore/amountK)/10);
}

exports();

function process(){
    amountK ++;
    var number = this.getAttribute('data-role');
    totalScore += parseInt(number);
    exports();
}
for(var i = 0; i<stars.length; i++){
    stars[i].addEventListener('click', process);
}
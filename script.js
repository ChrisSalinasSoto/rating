var aantalKliks = Math.ceil(Math.random());
var uitvoerAantal = document.getElementById('count');
var totaalScore = aantalKliks*Math.random();
var uitvoerWaadering = document.getElementById('rating');
var deSterren = document.querySelectorAll('.niks')


function kleurSter(sterNummer, procent) {
    var naam = 'ster' + sterNummer;
    procent = Math.min(procent, 100);
    document.getElementById(naam).style.width = procent + '%';
}

//kleurSter(1, 50);

function kleurDeSterren(waardering){
    for(var i=1; i < 6; i++){
        kleurSter(i, waardering*100);
        waardering --;
    }
}


//
function uitvoeren(){
    uitvoerAantal.innerHTML = aantalKliks;
    uitvoerWaadering.innerHTML = Math.ceil(10*totaalScore/aantalKliks)/10;
    kleurDeSterren(Math.ceil(10*totaalScore/aantalKliks)/10);
}

uitvoeren();

function verwerkKlik(){
    aantalKliks ++;
    var nummertje = this.getAttribute('data-role');
    totaalScore += parseInt(nummertje);
    uitvoeren();
}
for(var i = 0; i<deSterren.length; i++){
    deSterren[i].addEventListener('click', verwerkKlik);
}
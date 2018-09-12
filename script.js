var slideInterval = 4000;

function getFigures() {
    //haalt het id carousel op van het element figure
    return document.getElementById('carousel').getElementsByTagName('figure');
}

function moveForward() {
    var pointer = 0;
    var figures = getFigures();
    //i is kleiner dan 3 figures dus er komt steeds 1 bij de i
    for (var i = 0; i < figures.length; i++) {
        //als de figure visible is wordt hij nu weer hidden
        if (figures[i].className == 'visible') {
            figures[i].className = 'hidden';
            pointer = i;
        }
    }
    //Als de pointer gelijk staat met 3 dan wordt de pointer weer op 0 gezet
    if(++pointer == figures.length) {
        pointer = 0;
    }
    //hij 
    figures[pointer].className = 'visible';
    setTimeout(moveForward, slideInterval);
}

function startPlayback() {
    setTimeout(moveForward, slideInterval);
}

startPlayback();
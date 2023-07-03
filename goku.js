const turnOn = document.getElementById( 'turnOn' );
const turnOff = document.getElementById( 'turnOff' );
const goku = document.getElementById( 'goku' ); 

function isLampBroken (){
    return goku.src.indexOf ( 'preto' ) > -1
}
function gokuOn () {
    
        goku.src = './img/gokubr.jpg';
}

turnOn.addEventListener( 'click' , gokuOn);

function Gokucalv(){
    
        goku.src = './img/Gokucalvo.jpg';
    
}
//turnOff.addEventListener( 'click', lampOn);
turnOff.addEventListener( 'click', Gokucalv);

function gokupreto(){
    goku.src = './img/gokupreto.jpg';
}

goku.addEventListener( 'mouseover', gokuOn);
goku.addEventListener('mouseleave', Gokucalv);
goku.addEventListener('dblclick', gokupreto);

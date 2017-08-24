blinker = document.getElementById("blinker");
zeroOpacity= false;
function blink(opacity){
    if(!zeroOpacity){
        blinker.style.opacity = "0";
        zeroOpacity = true;
    }
    else{
        blinker.style.opacity = "1";
        zeroOpacity =  false;
    }
}
blinkId = setInterval(function m(){blink(zeroOpacity);},500);

blinkHolder = document.getElementById("head_display");
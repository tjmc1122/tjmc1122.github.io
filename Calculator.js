
var textBox = document.getElementById("textBox").innerHTML;
var entered_text = "";
var ops = ["+","-","/","*","="];
zeroOpacity= false;

function blink(opacity){
    blinker = document.getElementById("blinker");
    //console.log(blinker);
    if(!zeroOpacity){
        blinker.style.opacity = "0";
        zeroOpacity = true;
    }
    else{
        blinker.style.opacity = "1";        
        zeroOpacity =  false;
    }
 //console.log(blinker.style.opacity);
}
blinkId = setInterval(function m(){blink(zeroOpacity);},500);

document.onkeypress=verifyInput;

function verifyInput(e){
    x = new Number(e.key);
    console.log(x);
    if(!Object.is(x.valueOf(),NaN)){
       Write(e.key);  
    }
    else if(ops.includes(e.key)){
        if(e.key != "="){Write(e.key);}
        else{sum(entered_text)};
    }
    
    
}

function sum(expression){
    console.log(expression);
}
function Write(num){
    x = document.getElementById("textBox");
    entered_text += num;
    x.innerHTML = entered_text + textBox;    
}

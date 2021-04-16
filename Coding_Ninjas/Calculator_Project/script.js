console.log('CALCULATOR');

var buttons = document.getElementsByClassName('btn');
var display = document.getElementById('display');
var operand1 = null;
var operand2 = null;
var operate = null;

function click(){
    var temp = this.getAttribute('data-value');
    if(temp == '='){
        display.innerText = eval(operate);
        operate = null;
    }
    else{
        if(operate == null){
            operate = temp;
        }
        else{
            operate += temp;
        }
        display.innerText = operate;
    }
    // display.innerText = this.getAttribute('data-value');
}


for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', click);
}
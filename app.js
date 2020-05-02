
//Selecting the DOM Elements

const romanInput = document.querySelector('#roman');
const decimalInput = document.querySelector('#decimal')


const decimalInputValue = decimalInput.value;

let romanNumber = [];

let total = 0;

romanInput.addEventListener('input', convertRomanToDecimal);

function convertRomanToDecimal(){

    const romanInputValue = romanInput.value;

    

    for(var i=0; i<romanInputValue.length ; i++){
        romanNumber.unshift(romanInputValue[i]);
    }
    
    totalCalculator();
    
}

function totalCalculator(){
    for(var x=0; x<romanNumber.length ; x++){
        if(x=0){
            total = total + valueOfChar(romanNumber[x]);
        }
        if(x>0){
            if(valueOfChar(romanNumber[x]) < valueOfChar(romanNumber[x-1])){
                total = total + (valueOfChar(romanNumber[x]) - valueOfChar(romanNumber[x-1]));
            }else{
                total = total + valueOfChar[x];
            }

        }
    }
}

function valueOfChar(char){
    if(char === 'i'){
        return 1;
    }
    if(char === 'v'){
        return 5;
    }
    if(char === 'x'){
        return 10;
    }
    if(char === 'l'){
        return 50;
    }
    if(char === 'c'){
        return 100;
    }
    if(char === 'd'){
        return 500;
    }
    if(char === 'm'){
        return 1000;
    }
}

    

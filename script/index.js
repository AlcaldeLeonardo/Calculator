import { captureKeys } from "./module/captureKeys.js";

const keyNum = [];
const keyOp = [];
const $keyDel = document.getElementById("keyDEL")
const $keyClear = document.getElementById("keyClear");
const $keyEqual = document.getElementById("keyEqual")

const $displayOperands = document.getElementById("displayOperands");
const $displayResult = document.getElementById("displayResult")

let result = 0;


let displayNum = "";


//capturando los numeros
captureKeys(keyNum, "keyNum", 11);

//capturando a los operadores del DOM
captureKeys(keyOp, "keyOp", 4);


for (let index = 0; index < 11; index++) {
    //agregando eventos a los numeros
    keyNum[index].addEventListener("click", () =>{
        let num = keyNum[index].innerText;

        displayNum += `${num}`;

        $displayOperands.innerHTML = displayNum;
        console.log(displayNum)
    })
}

for (let index = 0; index < 4; index++) {
    
    //agregando eventos a los operadores
    keyOp[index].addEventListener("click", () =>{
        if(displayNum != ""){
            let operand = keyOp[index].innerText;
            let lastChar = `${displayNum.charAt(displayNum.length - 2)}`
    
            console.log(displayNum.charAt(0));
    
            if(operand != lastChar) {
                if(result == 0) displayNum += ` ${operand} `;
                else {
                    displayNum = `${result} ${operand} `
                    result = 0;
                }
            }
    
            $displayOperands.innerHTML = displayNum;
            console.log(displayNum)
        }
    })
}

$keyEqual.addEventListener("click", () =>{

    if(displayNum == "") result = 0;
    else result = eval(displayNum);
    $displayResult.innerHTML = result;
})

$keyDel.addEventListener("click", ()=>{
    displayNum = displayNum.trimEnd();

    displayNum = displayNum.slice(0,-1);

    $displayOperands.innerHTML = displayNum;
})

$keyClear.addEventListener("click", ()=>{
    displayNum = "";
    result = 0;
    
    $displayOperands.innerHTML = displayNum;
    $displayResult.innerHTML = result;
})
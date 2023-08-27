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
for (let index = 0; index < 11; index++) {
    keyNum.push(document.getElementById(`keyNum${index}`))
    
    //agregando eventos a los numeros
    keyNum[index].addEventListener("click", () =>{
        let num = keyNum[index].innerText;

        displayNum += `${num}`;

        $displayOperands.innerHTML = displayNum;
        console.log(displayNum)
    })
}

//capturando a los operadores del DOM
for (let index = 0; index < 4; index++) {
    keyOp.push(document.getElementById(`keyOp${index}`))
    
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
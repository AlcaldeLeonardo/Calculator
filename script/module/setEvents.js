import { limitDecimals } from "./limiter.js";

export function setEvents(keyNum, keyOp) {
    const $keyDel = document.getElementById("keyDEL");
    const $keyClear = document.getElementById("keyClear");
    const $keyEqual = document.getElementById("keyEqual");
    const $displayOperands = document.getElementById("displayOperands");
    const $displayResult = document.getElementById("displayResult");
    let result = 0;
    let displayNum = "";


    function updateDisplay() {
        $displayOperands.innerHTML = displayNum;
    }

    function handleNumberClick(num) {
        displayNum += num;
        updateDisplay();
    }

    function handleOperatorClick(operand) {
        if (displayNum !== "") {
            const lastChar = displayNum.charAt(displayNum.length - 2);
            
            if (operand !== lastChar) {
                if (result === 0) {
                    displayNum += ` ${operand} `;
                } else {
                    displayNum = `${result} ${operand} `;
                    result = 0;
                }
            }

            updateDisplay();
        }
    }

    function handleEqualClick() {
        result = displayNum === "" ? 0 : eval(displayNum);
        result = limitDecimals(result, 10, 10);
        $displayResult.innerHTML = result;
    }

    function handleDeleteClick() {
        displayNum = displayNum.trimEnd().slice(0, -1);
        updateDisplay();
    }

    function handleClearClick() {
        displayNum = "";
        result = 0;
        updateDisplay();
        $displayResult.innerHTML = result;
    }

    for (let index = 0; index < 12; index++) {
        keyNum[index].addEventListener("click", () => {
            handleNumberClick(keyNum[index].innerText);
        });
    }

    for (let index = 0; index < 4; index++) {
        keyOp[index].addEventListener("click", () => {
            handleOperatorClick(keyOp[index].innerText);
        });
    }

    $keyEqual.addEventListener("click", handleEqualClick);

    $keyDel.addEventListener("click", handleDeleteClick);

    $keyClear.addEventListener("click", handleClearClick);
}

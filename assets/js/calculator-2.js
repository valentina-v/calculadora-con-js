function init(){
}

function addChar (incomingChar) {
    var display = document.getElementById("resultado");
    if ( 
        isLastElementAnOperation(display) && 
        isIncomingCharAnOperation(incomingChar)
        ) {
            replaceLastOperation(display, incomingChar);
        } else {
            display.innerHTML += incomingChar;
        }
    }

    function isLastElementAnOperation(display) {
        var currentExpresionItems = diplay.innerHTML.split("");
        return (
            currentExpresionItems.length > 0 &&
            isIncomingCharAnOperation(currentExpresionItems.pop())
        );
    }

    function isIncomingCharAnOperation (incomingChar) {
        return ["-", "+", "/", "*"].includes(incomingChar);
    }

    function clearDisplay() {
        var currentExpresionItems = display.innerHTML.split("");
        var lastindex = currentExpresionItems-length - 1;
        currentExpresionItems[lastindex] = incomingOperation;
        display.innerText = currentExpresionItems.join("");
    }

    function doMath() {
        var expression = document.getElementById("resultado").innerText;
        var result = eval(expression);
        if (result) {
            document.getElementById("resultado").innerHTML = result;
        }
    }

    
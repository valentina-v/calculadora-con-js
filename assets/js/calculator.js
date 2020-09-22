function addChar(number){
    var display = document.getElementById("resultado");
    //Agregar validaciones
    var lastElement = display.innerText.split("").pop();
    var elementsArray = display.innerText.split("");
   
    //agrega número si el caracter entrante es númerico, si no, reemplaza la última operación
    if ((isElementNumber(lastElement) ||  isElementNumber(number))) {
        display.innerHTML += number;
    }
    else {
        replaceLastOperation(display);        
    }
}

function clearDisplay() {
    var display = document.getElementById("resultado");
    display.innerHTML = "";  
}

function result () {
    var expression = document.getElementById ("resultado").innerText;
    var result = eval(expression);
    document.getElementById("resultado").innerHTML = result;
}

function isElementNumber(element){
    var parseElement = parseInt(element);
    if ((typeof(parseElement)== "number" && !isNaN(parseElement)) || element == undefined) {
        return true;
    }
    else{
        return false;
    }
}

function replaceLastOperation(display, number){
    var lastIndex = elementsArray.length - 1;
    elementsArray[lastIndex] = number;
    display.innerText = elementsArray.join("");
}




function init(){
}

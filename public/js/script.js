const inputCalc = document.querySelector('.input'),
      resultCalc = document.querySelector('.output');

function input(i) {
    inputCalc.value = inputCalc.value + i
}

function result() {
    try {
        if(eval(inputCalc.value) == undefined) {
            resultCalc.value = '0';
            inputCalc.value = '0';
        }
        if(eval(inputCalc.value) == Infinity) {
            resultCalc.value = '0';
        }
        resultCalc.value = eval(inputCalc.value);

    }
    catch {
        resultCalc.value = "Ошибка";
    }
}

function backspace() {
    inputCalc.value = inputCalc.value.substring(0, inputCalc.value.length - 1);
}

function reset() {
    resultCalc.value = '';
    inputCalc.value = '';
}
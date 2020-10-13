const inputCalc = document.querySelector('.input'),
      resultCalc = document.querySelector('.output');

function input(i) {
    inputCalc.value = inputCalc.value + i
}

function result() { // функқия для расчета результатов
    resultCalc.style.fontSize = "60px";
    
    try {
        if(eval(inputCalc.value) == undefined) { // проверка на пустату при расчете результатов
            return;
        }
        if(eval(inputCalc.value) == Infinity) { // проверка деление на ноль
            resultCalc.value = 'на ноль делить нельзя';
            resultCalc.style.fontSize = "1.8em";
            return;
        }
        resultCalc.value = eval(inputCalc.value);
    }
    catch {
        resultCalc.value = "Ошибка";
    }
}

function backspace() {
    inputCalc.value = inputCalc.value.substring(0, inputCalc.value.length - 1); // находим строку n - 1 и удаляем его
}

function reset() { // удаляет всё (и ввод и вывод)
    resultCalc.style.fontSize = "60px";
    resultCalc.value = '';
    inputCalc.value = '';
}
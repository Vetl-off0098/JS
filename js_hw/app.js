'use strict'

//объект разрядов
function conversion (num) {
    if(!Number.isInteger(num) || num < 0 || num > 999) {
        console.log('Введите целое число в диапазорне от 0 до 999');
        return {};
    }
    return {
        hundreds: Math.floor(num/100),
        tens: Math.floor(num / 10) % 10,
        units: num % 10 
    }
}

console.log(conversion(532));
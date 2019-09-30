'use strict'

//дз №1

//№1

/*
let temp1 = +prompt("Введите значение температуры по Цельсию");
let temp2 = (9/5) * temp1 + 32;
alert(`Вот сколько это по Фаренгейту: ${temp2}`);
*/

//№2

/*
let admin;
let name = "Василий";
admin = name;
console.log(name);
*/

//№3

/*
let result = 10 + 10 + "10";
console.log(result);
*/

/*
1. первые две десятки складываются, так как обе являются числами, получаем 20
2. 20 конкатенируется с последней десяткой, так как именно она является строкой, получаем 2010
3. полученное значение записываем в переменную result
4. с помощью console.log выводим result в консоль
*/

//№4

/*
let mode = "normal";  // является
let my_valu3 = 102; // является
//let 3my_value3 = "102"; // не является, так как в начале стоит число
let __hello__ = "world"; // является
let $$$ = "money"; // является 
//let !0_world = true; // не является, так как стоит восклицательый знак
*/



//генерация пароля
// let symbols = "1234567890!@#$%^&*()-_=+;:][}{/?.,qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
// let password = "";

// /**
//  * Функция возвращает случайное целое число от nim (включительно) до max (не включительно)
//  * @param {number} min
//  * @param {number} max
//  * @returns {number}
// */
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// /**
//  * Функция генерирует случайный пароль
//  * @param {number} passLength длина пароля
//  * @returns {void}
//  */
// function generate(passLength) {
//     let symbolPosition = getRandomInt(0, 87);
//     password += symbols.charAt(symbolPosition);
//     passLength--;
//     if(passLength != 0) {
//         generate(passLength);
//     }
// }

// /**
//  * функция спрашивает у пользователя длину пароля
//  * @returns {number}
//  */
// function askPassLength() {
//     return parseInt(prompt("Введите длину пароля"));
// }

// generate(askPassLength());
// alert(`Ваш пароль: ${password}`);


//trace пример
// function hello() {
//     alert("работает функция hello");
// }

// function world() {
//     alert("работает функция world");
//     console.trace();
// }

// function one() {
//     hello();
//     world();
// }

// one();



//проверка пароля
// const pass = prompt("Введите пароль");
// const passLength = pass.length > 5;
// const digitsPresented = /\d+/gm.test(pass);
// const letterPresented = /[a-zA-Z]+/gm.test(pass);
// if(passLength && digitsPresented  && letterPresented) {
//     alert("Ваш пароль подходит");
// } else {
//     alert("Ваш пароль НЕ подходит");
// }



//Урок №2
// №1

// // пример 1
// let a = 1, b = 1, c, d;
// c = ++a; //a и c становятся = 2, так как используется префиксная форма инкремента
// alert(c);

// // пример 2
// d = b++;
// alert(d);//d = 1, b = 2, так как испозуется постфиксная форма инкремента

// // пример 3
// c = 2 + ++a;
// alert(c);// a = 3, c = 5, так как используется префиксная форма инкремента, значение "a" сразу же увеличивается на единицу

// // пример 4
// d = 2 + b++;
// alert(d);//d = 4, b = 3, так как используется постфиксная форма 

// alert(a);//3
// alert(b);//3


// №2
// let a = 2;
// let x = 1 + (a *= 2);
// alert(a); //a = 4, так как выражение a*=2 увеличивает значение a в 2 раза
// alert(x); //5


// №3
// let a = parseInt(prompt("Введите первое число"));
// let b = parseInt(prompt("Введите второе число"));
// if(a >= 0 && b >= 0) {
//     alert(a - b);
// }
// else if(a < 0 && b < 0) {
//     alert(a * b);
// }
// else if(Math.sign(a) != Math.sign(b)) { // в принципе, проще было бы записать через else, но это уже не серьёзно
//     alert(a + b);
// }
// let a = Math.sign(-3);
// alert(a); //-1


// //№4
// /**
//  * Функция вычитает введенные аргументы
//  * @param {number} a 
//  * @param {number} b 
//  */
// function sub(a, b) {
//     return a - b;
// }

// function add(a, b) {
//     return a + b;
// }

// function mult(a, b) {
//     return a * b;
// }

// function div(a, b) {
//     return a / b;
// }

// // alert(div(6, 3));


// //№5
// function mathOperation(arg1, arg2, operation) {
//     switch (operation) {
//         case "-":
//             return sub(arg1, arg2);
//         case "+":
//             return add(arg1, arg2);
//         case "*":
//             return mult(arg1, arg2);
//         case "/":
//             return div(arg1, arg2);
//         default:
//             alert("нет такой операции");
//     }
// }

// console.log(mathOperation(5, 3, "-"));
// console.log(mathOperation(4, 6, "+"));
// console.log(mathOperation(3, 5, "*"));
// console.log(mathOperation(12, 4, "/"));



//№6
let bankAccount = prompt("Введите сумму, которую хотите положить на счёт");
let a = bankAccount.length - 1;
if(bankAccount.charAt(bankAccount.length - 2) == 1) {
    console.log(`Ваша сумма в ${bankAccount} рублей успешно зачислена`);
} else {
    switch (bankAccount[a]) {
        case "0":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            console.log(`Ваша сумма в ${bankAccount} рублей успешно зачислена`);
            break;
        case "1":
            console.log(`Ваша сумма в ${bankAccount} рубль успешно зачислена`);
            break;
        case "2":
        case "3":
        case "4":
            console.log(`Ваша сумма в ${bankAccount} рубля успешно зачислена`);
            break;
        default:
            console.log("Не зачислено");
            break;
    }
}

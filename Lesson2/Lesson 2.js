// Урок 2. Основные операторы JavaScript

// Ряд Фибаначче
// 0 1 1 2 3 5 8 13


function fibb(n) {
    if (n<=1) {
        return n;
    }
   // alert('fibb(n-1) = ' + fibb(n-1) + '   fibb(n-2) = ' + fibb(n-2));
    return fibb(n-1) + fibb(n-2);
}

let n = +prompt('Введите номер числа Фибаначче, значение которого хотите узнать');
console.log(`Начало расчета ${new Date()}`);
let nF = fibb(n);


// Ряд Фибаначче через массив

/*
let arr = [0];
let n = +prompt('Введите номер числа Фибаначче, значение которого хотите узнать');

console.log(`Начало расчета ${new Date()}`);

for (let i = 1; i <= n; i++) {
    if (i == 1) {
        arr.push(i)
    } else {
        arr.push(arr[i-2] + arr[i-1]);
    }
}
*/
console.log(`Конец расчета ${new Date()}`);
console.log(`${n} число Фибаначчи = ${nF}`);


// Игра "Угадай число"
/*
let N = 0;

function guess(tC) {
    if (tC === 1) {
        N = Math.round(Math.random() * 10);
        console.log('Загаданное число - ' + N);
    } 
    
    const Answer = +prompt('Введите число от 1 до 10');
    if (Answer === N) {
        alert(`Вы выиграли за ${tC} попыток!`);
        const Repeat = +prompt('Хотите продолжить? 1 - да, другое - нет');
        if (Repeat === 1) {
            guess(1);
        }
    } else {
        guess(++tC);
    }
}

guess(1);
*/

/*
// ДЗ
// Задание 1. Дан код. Почему код даёт именно такие результаты?

let a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 '++ перед переменной сначала увеличивает значение, потом выполняет операцию'
d = b++; alert(d);           // 1 '++ после переменной сначала выполняетоперацию, потом увеличивает значение' 
c = (2+ ++a); alert(c);      // 5 на данный момент а=2, увеличиваем значение на 1, выполняем операцию.
d = (2+ b++); alert(d);     // 4  на данный момент b=2,  выполняем операцию,увеличиваем значение на 1.
alert(a);                    // 3
alert(b);                    // 3

// Задание 2. Чему будет равен x в примере ниже?

let a = 2;
let x = 1 + (a *= 2); // 5 (1 + (2*2) = 5)
alert(x); */

/* Задание 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
Затем написать скрипт, который работает по следующему принципу:

если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. */

/*
let a;
let b;

a = +prompt('Задайте число А:');
b = +prompt('Задайте число В:');

if ((a * b) >= 0) {
    if (a>=0) {
        alert('А и В положительные числа. Разость А - В =  '+ (a-b));
    } else {
        alert('А и В отрицательные числа. Произведение А * В =  '+ (a*b));
    }
} else {
    alert('А и В имеют разные знаки. Сумма А + В =  '+ (a+b));
}   
*/           

/* Задание 4. Присвоить переменной а значение в промежутке [0..15]. 
С помощью оператора switch организовать вывод чисел от a до 15. */

/*
let a;
let string='';

a=+prompt('Задайте число в диапозне от 0 до 15:');
switch (a) {
    case 0: string = string + ' 0;';
    case 1: string = string + ' 1;';
    case 2: string = string + ' 2;';
    case 3: string = string + ' 3;';
    case 4: string = string + ' 4;';
    case 5: string = string + ' 5;';
    case 6: string = string + ' 6;';
    case 7: string = string + ' 7;';
    case 8: string = string + ' 8;';
    case 9: string = string + ' 9;';
    case 10: string = string + ' 10;';
    case 11: string = string + ' 11;';
    case 12: string = string + ' 12;';
    case 13: string = string + ' 13;';
    case 14: string = string + ' 14;';
    case 15: string = string + ' 15;';
}

alert(string);

*/

/* Задание 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
Обязательно использовать оператор return. */

/*
function getSumma(a, b) {
    return (a + b);
}

function getMinus(a, b) {
    return (a - b);
}

function getProduct(a, b) {
    return (a*b);
}

function getDivide (a,b) {
    return (a / b);
}

let numberA = +prompt('Введите число А');
let numberB = +prompt('Введите число B');
*/

/*
console.log(`${numberA} + ${numberB} = ${getSumma(numberA, numberB)}`);
console.log(`${numberA} - ${numberB} = ${getMinus(numberA, numberB)}`);
console.log(`${numberA} * ${numberB} = ${getProduct(numberA, numberB)}`);
console.log(`${numberA} / ${numberB} = ${getDivide(numberA, numberB)}`);
*/


/* Задание 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от 
переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) 
и вернуть полученное значение (использовать switch). */

/*
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+': console.log(`${arg1} + ${arg2} = ${getSumma(arg1, arg2)}`);
                  break;
        case '-': console.log(`${arg1} - ${arg2} = ${getMinus(arg1, arg2)}`);
                  break;
        case '*': console.log(`${arg1} * ${arg2} = ${getProduct(arg1, arg2)}`);
                  break;
        case '/': console.log(`${arg1} / ${arg2} = ${getDivide(arg1, arg2)}`);
    }
}

let operation = prompt('Выберите математическую операцию: + сложение; - вычитание; * умножение; / деление');

mathOperation(numberA, numberB, operation);

// Задание 7. *Сравнить null и 0. Попробуйте объяснить результат.

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
*/

/*
С точки зрения математики это странно. Результат последнего сравнения говорит о том, 
что "null больше или равно нулю", тогда результат одного из сравнений выше должен быть true, но они оба ложны.

Причина в том, что нестрогое равенство и сравнения > < >= <= работают по-разному. 
Сравнения преобразуют null в число, рассматривая его как 0. Поэтому выражение (3) null >= 0 истинно, а null > 0 ложно.

С другой стороны, для нестрогого равенства == значений undefined и null действует особое правило: 
эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому. Поэтому (2) null == 0 ложно.
*/


/* Задание 8. *С помощью рекурсии организовать функцию возведения числа в степень. 
Формат: function power(val, pow), где val – заданное число, pow – степень. 

ПОДСМОТРЕЛА В УЧЕБНИКЕ    https://learn.javascript.ru/recursion*/

/*
function power(val, pow) {
    return (pow == 1) ? val : (val * power(val, pow - 1)); 
}

let x = +prompt('Ведите число, которое надо возвести в степень');
let n = +prompt('Введите значение степени (целое положительное число)');
console.log(`Число ${x} возвести в степень ${n}`);

if (n > 0) {
    console.log(`Результат ${power(x, n)}`)
} else {
    console.log('Вы ввели не правильное значение степени');
}
*/
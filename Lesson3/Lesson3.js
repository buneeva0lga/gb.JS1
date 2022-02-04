// Урок 3. Циклы, массивы, структуры данных

//let obj = {name:'Alex', password:'12345' };
//for (let i in obj)
//{
	// Вывести значение каждого свойства объекта
//	console.log(obj[i]);
//}

/*
Игра "Быки и коровы": отгадываем 4-значное число.
Действия, которые надо сделать:
1. Сгенерировать число, чтобы цифры в нем не повторялись
2. Пригласить на ввод
3. Проверяем каждую цифру из числа пользователя - есть ли она в загаданном числе
4. Если цифра есть, но позиция не совпала - зачисляем 1 корову
5. Если цифра есть и позиция совпала - зачисляем 1 быка
6. Выводим результат

Интересная игра
*/

function generateNumber() {
    const arr = [];
    while (arr.length < 4) {
        const d = Math.floor(Math.random() * 10);
        if (arr.indexOf(d) < 0) {
            arr.push(d);
        }
    }
    return arr.join('');
}

function game() {
    const N = generateNumber();
//    console.log (N);
    let tryCount = 0;
    while(true) {
        const playerNumber = prompt('Введите 4х значное число: ');
        if (playerNumber === null) {
            break;
        };
        if (N === playerNumber) {
            console.log(`Вы угадали за ${tryCount} попыток! Загаданное число - ${N}, ваше число - ${playerNumber}`);
            break;
        }
        let cow = 0;
        let bull = 0;

        for (let i = 0; i < playerNumber.length; i++) {
            const digit = playerNumber[i];
            const found = N.indexOf(digit);
            if (found >= 0) {
                if (found === i) {
                    bull++;
                } else {
                    cow++;
                }
            }
        }
        console.log(`Введенное число ${playerNumber}. Количество быков - ${bull}, коров - ${cow}}`);
        tryCount++;
    }
}

while(true) {
    game();
    if (!confirm('Ещё сыграем? [:-) ОК - да, Отмена - нет')) {
        break;
    }
}

/* 
Практическое задание.

1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
*/

const arrAll = [0,1];
const arrSingle = [];
const n = 100;
const countSingle = Math.floor(Math.sqrt(n));

//(pow > 0) ? 1 : (val * power(val, pow - 1))

for (let i = 2; i <= n; i++) {

    arrAll.push(i);
    arrSingle.push(i);

    for (let j = 2; j < (i <= countSingle ? i : countSingle); j++) {
        if (i % j == 0) {
            arrSingle.pop(i);
            break;
        }
    }
} 
console.log(`Весь массив : ${arrAll.join(', ')}`);
console.log(`Простые : ${arrSingle.join(', ')}`);

/*
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. 
Товары в корзине хранятся в массиве. 
Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

function countBasketPrice(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

const basket = [1200,4800,2195,233];

console.log(`Корзина ${basket} сумма - ${countBasketPrice(basket)}`);

/*
3*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто}
*/

for (let i = 0; i < 10; console.log(i++)) {};

/*
4) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/
let stringX = '';
for (let i = 1; i <= 20; i++) {
    console.log(stringX = stringX + 'x');
}
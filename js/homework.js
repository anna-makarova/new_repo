'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    // Ваше решение
    checkNumber(a);
    checkNumber(b);
    return (a + b);

}

function checkNumber(number) {
    if (typeof number !== 'number') {
        throw new Error('this is not a number');
    }
}

try {
    abProblem(10, 20)
} catch (e) {
    console.log(e)
}


/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */

// ДОБАВИТЬ ПРАВИЛЬНУЮ ОБРАБОТКУ ИСКЛЮЧЕНИЙ
function centuryByYearProblem(year) {
    // Ваше решение
    let v;
    if (typeof year !== 'number') {
        throw new Error('это не число');
    } else if (year <=0) {
        throw new Error('значение не может быть отрицательным');
    } else
        v = Math.floor((year-1)/100) + 1;
    return v;
}
console.log('Год соответствует ' + centuryByYearProblem(2001) + ' веку');


/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    // Ваше решение
    let hex1 = hexColor.substring(1,3);
    let hex2 = hexColor.substring(3,5);
    let hex3 = hexColor.substring(5,7);
    let r = parseInt(hex1,16);
    let g = parseInt(hex2,16);
    let b = parseInt(hex3,16);
    return r + ',' + g + ',' + b;

}
console.log(colorsProblem('#FFFFFF'));
/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    // Ваше решение
    let a = 1; //fib(1)
    let b = 1; //fib(2)
    if (typeof n !== 'number') {
        throw new TypeError('это не число');
    } else if (n < 0 || (n ^ 0) !== n) {
        Number.isInteger(n)
        throw new RangeError('значение должно быть целым положительным числом');
    }
    for (let i = 3; i <= n; i++) {
        let n = a + b;
        a = b;
        b = n;
    }
    return b;
}

console.log('Число Фибоначи ' + fibonacciProblem(7))

/**
 * Транспонирует матрицу
 * @param {any[][]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    // Ваше решение
    // [
    //     [1,2,3] row
    //     [4,5,6]
    //     [7,8,9]
    // ]
    const {rowsCount, columnsCount} = parseNumber(matrix);
    const result = [];
    for (let columnNumber = 0; columnNumber < columnsCount; columnNumber++) {
        const newRow = [];
        for (let rowNumber = 0; rowNumber < rowsCount; rowNumber++) {
            newRow.push(matrix[rowNumber][columnNumber])
        }
        result.push(newRow);
    }
    return result;

}

function parseNumber(matrix) {
    return {
        rowsCount: matrix.length,
        columnsCount: matrix[0].length
    }
}

console.log('Транспонированная матрица ' + matrixProblem([[2,3,5],[2,3,5],[2,3,5]]));

/**
 * Переводит число в другую систему счисления
 * @param {Number} n Число для перевода в другую систему счисления
 * @param {Number} targetNs Система счисления, в которую нужно перевести (Число от 2 до 36)
 * @throws {TypeError} Когда переданы аргументы некорректного типа
 * @throws {RangeError} Когда система счисления выходит за пределы значений [2, 36]
 * @returns {String} Число n в системе счисления targetNs
 */
function numberSystemProblem(n, targetNs) {
    // Ваше решение
    if (typeof n !== 'number' || typeof targetNs !== 'number' ) {
        throw new TypeError('это не число');
    } else if (targetNs <2 || targetNs >36) {
        throw new RangeError('значение не находится в диапазоне от 2 до 36');
    }

    console.log('Число ' + n + ' в ' + targetNs + ' системе счисления = ' + (n).toString(targetNs));
    return (n).toString(targetNs);
}
numberSystemProblem(17, 36)
/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    // Ваше решение
    let arr = Array.from(phoneNumber);
    if (arr.length === 15 && arr[5] === '-' && arr[9] === '-' && arr[12] === '-'){
        console.log('Соответствует формату');
        return true;
    }
    else{
        console.log('Не соответствует формату');
        return false;
    }
}

function checkStr(string) {
    if (typeof string !== 'string') {
        throw new TypeError('В качестве аргумента передана не строка')
    }
}

try {
    phoneProblem('8-800-567-46-37')
}catch (e) {
    console.log(e)
}

/**
 * Определяет количество улыбающихся смайликов ":-)" в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    // Ваше решение
    checkString(text);
    let count = 0;
    let found = text.indexOf(':-)')
    while (found !== -1) {
        count++;
        found = text.indexOf(':-)', found + 1);
    }
    console.log('Число смайликов ' + count);
    return count;
}
function checkString (string){
    if (typeof string !== 'string') {
        throw new TypeError();
    }
}
try {
    smilesProblem ('Это тестовый текст :-) и другой тестовый текст: :-)')
} catch (e) {
    console.log(e)
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    // [
    //     [x,x,o],
    //     [o,x,o],
    //     [o,o,x]
    // ]
let player;
    for (let i = 0; i < 3; i++) {
        if (check(field[0][i], field[1][i], field[2][i])) {
            return field[0][i]
        } else if (check(field[i][0], field[i][1], field[i][2])) {
            player = field[i][0];
        }
    }
    if (check(field[0][0], field[1][1], field[2][2])) {
        player =  field[0][0];
    }
    if (check(field[0][2], field[1][1], field[2][0])) {
        player =  field[0][2];
    }
    if (player === 'o') {
        return '0|1'
    } else if (player === 'o') {
        return '1|0'
    } else {
        return 'No winner'
    }

}
function check(a, b, c) {
    if (a !== 0 && a === b && a === c) {
        return true
    }
}
console.log(ticTacToeProblem( [
        ['x','o','x'],
        ['o','x','o'],
        ['o','x','o']
    ]));




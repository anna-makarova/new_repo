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
    let c = a + b
    if (typeof a !== 'number') {
        throw new Error('this is not a number');
    }else if (typeof b !== 'number') {
        throw new Error('this is not a number');
    }else
        console.log('Сумма чисел ' + c)
}

abProblem (10, 20)
 
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
   console.log('Год соответствует ' + v + ' году');
}
centuryByYearProblem(2001)


/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    // Ваше решение

}
 
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
   console.log('Число Фибоначи '+ b);
}

fibonacciProblem(7)
 
/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    // Ваше решение

}
 
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
}
 
/**
 * Определяет количество улыбающихся смайликов ":-)" в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    // Ваше решение
    let amount = 0;
    let found = ':-)'
    if (typeof text !== 'string') {
        throw new TypeError()
    } else
    for (let i=0; i < text.length; i++) {
        if (text[i] === found) amount++;
    }

    console.log('Число смайликов в строке = ' + amount)
}
 smilesProblem ('Это тестовый текст :-)')
/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    // Ваше решение
}

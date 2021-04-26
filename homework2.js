/**
 * Пусть у нас есть какой-то стример, и этому стримеру периодически донатят.
 * Разные пользователи могут донатить разное кол-во раз и разное кол-во денег.
 *
 * На вход методу передается история донатов. Необходимо вывести на консоль всех
 * пользователей, которые делали донаты. Каждый из донативших пользователей должен
 * быть выведен ровно один раз. Имена пользователей должны быть выведены в том порядке,
 * в котором они встретились в истории донатов.
 *
 * @example
 * printUsersDistinct([
 *   { username: "Max", value: 10 },
 *   { username: "Alice", value: 50 },
 *   { username: "Max", value: 45 },
 *   { username: "Irina", value: 45 }
 * ])
 * // Вывод:
 * // Max
 * // Alice
 * // Irina
 *
 * @param {Object[]} history - История донатов. Представляет из себя массив объектов вида { user, value }
 * @param {String} history[].username - Имя пользователя
 * @param {Number} history[].value - Сумма, задоначенная пользователем
 */
function printUsersDistinct(history) {
    let newHistory = [];
    newHistory = new Set(history.map(person => person.username));
    return newHistory;
}
console.log(printUsersDistinct([{ username: "Max", value: 10 }, { username: "Alice", value: 50 }, { username: "Max", value: 45 }, { username: "Irina", value: 45 }]))

/**
 * Пусть у нас есть какой-то стример, и этому стримеру периодически донатят.
 * Разные пользователи могут донатить разное кол-во раз и разное кол-во денег.
 *
 * На вход методу передается история донатов. Необходимо найти пользователя, который задонатил в сумме
 * наибольшее кол-во денег и вывести этого пользователя вместе с суммой на консоль в формате "username - sum".
 *
 * @example
 * printMaxDonatingUser([
 *   { username: "Max", value: 10 },
 *   { username: "Alice", value: 50 },
 *   { username: "Max", value: 45 }
 * ]);
 * // Вывод:
 * // Max - 55
 *
 * @param {Object[]} history - История донатов. Представляет из себя массив объектов вида { user, value }
 * @param {String} history[].username - Имя пользователя
 * @param {Number} history[].value - Сумма, задоначенная пользователем
 */
function printMaxDonatingUser(history) {

}
console.log(printMaxDonatingUser([{ username: "Max", value: 10 }, { username: "Alice", value: 50 }, { username: "Max", value: 45 }]));


/**
 * Необходимо найти сумму всех чисел, лежащих между 0 и n, и вывести ее на консоль.
 *
 * @example
 * printSumFromZeroToN(0);  // 0
 * printSumFromZeroToN(1);  // 1
 * printSumFromZeroToN(10);  // 55
 * printSumFromZeroToN(-5);  // -15
 *
 * @param {Number} n
 */
function printSumFromZeroToN(n) {
    let startArr = [0];
    for (let i = 1; i <= n; i++) {
        startArr.push(i);
    }
    return startArr.reduce((total, i) => total + i, 0);
}
console.log(printSumFromZeroToN(25))
/**
 * На вход дан массив, содержащий какое-то кол-во массивов чисел (как минимум один).
 * Необходимо вывести на консоль все числа через пробел в увеличивающейся последовательности.
 *
 * Подсказка: у массивов в js есть встроенная функция sort()
 *
 * @example
 * sortArrayOfArrays([[1]]);  // 1
 * sortArrayOfArrays([[3, 2, 1]]);  // 1 2 3
 * sortArrayOfArrays([
 *   [9, 2, 5],
 *   [4, 3],
 *   [6, 8, 7, 1]
 * ]);  // 1 2 3 4 5 6 7 8 9
 *
 * @param {Number[][]} arrays - массив массивов чисел
 */
function sortArrayOfArrays(arrays) {
   let oneArr = arrays.flat();
   oneArr.sort(compareNumbers);
   return oneArr;
}

function compareNumbers(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
}
console.log(sortArrayOfArrays([[3, 12, 1],[6, 9, 5]]))

/**
 * На вход передан массив людей, состоящий из объектов вида { firstname, lastname }.
 * Необходимо вывести на консоль имена людей, отсортированных сначала по lastname,
 * а затем по firstname.
 *
 * Можно считать, что в имена пользователей содержат только английские буквы.
 *
 * Подсказка: стандартный метод sort() у массивов может принимать аргумент - функцию сравнения.
 *
 * @example
 * sortPeople([
 *   { firstname: "Ivan", lastname: "Ivanov" },
 *   { firstname: "Alex", lastname: "Ivanov" },
 *   { firstname: "Max", lastname: "Bobrov" }
 * ]);
 * // Выведет:
 * // Bobrov Max
 * // Ivanov Alex
 * // Ivanov Ivan
 *
 * @param {Object[]} people - массив людей вида { firstname, lastname }
 * @param {String} people[].firstname
 * @param {String} people[].lastname
 */
function sortPeople(people) {
    let newPeople = people.map(person => `${person.lastname} ${person.firstname}`);
    newPeople.sort();
    return newPeople;
}
console.log(sortPeople([{ firstname: "Ivan", lastname: "Ivanov" }, { firstname: "Alex", lastname: "Ivanov" }, { firstname: "Max", lastname: "Bobrov" }]));

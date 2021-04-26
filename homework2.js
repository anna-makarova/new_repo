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
    const uniqueUsernames = new Set(history.map(person => person.username));
    for (const username of uniqueUsernames) {
        console.log(username);
    }
}
printUsersDistinct([
    { username: "Max", value: 10 },
    { username: "Alice", value: 50 },
    { username: "Max", value: 45 },
    { username: "Irina", value: 45 }
]);
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
    // find all donations sum
    let donations = new Map();  // username -> values_sum
    for (const historyObject of history) {
        if (donations.has(historyObject.username)) {
            const oldValue = donations.get(historyObject.username);
            donations.set(historyObject.username, oldValue + historyObject.value);
        } else {
            donations.set(historyObject.username, historyObject.value);
        }
    }

    // find max donated user
    let maxValue = -1;
    let usernameWithMaxValue = null;
    for (const [username, valueSum] of donations) {
        if (maxValue < valueSum) {
            maxValue = valueSum;
            usernameWithMaxValue = username;
        }
    }

    console.log(usernameWithMaxValue + " - " + maxValue);
}
printMaxDonatingUser([
    { username: "Max", value: 10 },
    { username: "Alice", value: 50 },
    { username: "Max", value: 45 }
]);

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
    const term = n > 0 ? 1 : -1;

    let sum = 0;
    for (let i = 0; Math.abs(i) <= Math.abs(n); i += term) {
        sum += i;
    }

    return sum;
}
console.log(printSumFromZeroToN(10));

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
    const allNumbers = [];
    for (const array of arrays) {
        for (const number of array) {
            allNumbers.push(number);
        }
    }

    return allNumbers.sort(compareNumbers);
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
    return people
        .map(person => `${person.lastname} ${person.firstname}`)
        .sort();
}
console.log(sortPeople([{ firstname: "Ivan", lastname: "Ivanov" }, { firstname: "Alex", lastname: "Ivanov" }, { firstname: "Max", lastname: "Bobrov" }]));

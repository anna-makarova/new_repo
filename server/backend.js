// ========
// Данные
// ========

/**
 * Содержит в себе отображение из имени пользователя
 * в объект вида { password: "his_password", likedGoods: new Set(...) }.
 *
 * Изначально пустой, но по ходу работы приложения наполняется новыми пользователями.
 *
 * @type {Map<string, Object>}
 */
const users = new Map();

/**
 * Содержит список существующих товаров.
 *
 * У товара, помимо естественных полей типа name, categories и т.п.
 * должно присутствовать поле id - уникальный числовой идентификатор.
 *
 * @type {Object[]}
 */
const goods = [];  // TODO: заполнить объектами товаров



// ========
// Пользователи
// ========

/**
 * Создает нового пользователя в users. Ничего не возвращает в случае успешного сохранения,
 * а если пользователь с заданным именем уже существует, выбрасывает Error - можно без сообщения ошибки.
 *
 * Для пользвателя, помимо пароля, должен создаваться пустой список лайкнутых им товаров.
 *
 * @param {String} username Имя создаваемого пользователя
 * @param {String} password Пароль создаваемого пользователя
 * @throws {Error} Когда пользователь с заданным именем уже существует
 */
function logUp({ username, password }) {
    // TODO: реализовать
}

/**
 * Ищет в users пользователя username и проверяет его пароль.
 *
 * Если username и password корректные, то метод просто ничего не делает.
 * Если пользователя не существует или для пользователя указан неверный пароль,
 * должно выбрасываться Error - можно без сообщения ошибки.
 *
 * @param {String} username
 * @param {String} password
 * @throws {Error} Когда заданного пользователя не существует или не подходит пароль
 */
function logIn({ username, password }) {
    // TODO: реализовать
}



// ========
// Товары
// ========

/**
 * Возвращает список всех товаров со всеми их характеристиками - ид, имя, категории и т.п.
 * @returns {Object[]}
 */
function getAllGoods() {
    return goods;
}

/**
 * Возвращает список всех товаров (с их ид, навзанием и пр.), у которых есть все категории,
 * указанные в categories. Если таких товаров нет, то возвращает пустой список
 *
 * @param {String[]} categories Искомые категории
 * @returns {Object[]}
 */
function getGoodsWithCategories(categories) {
    // TODO: реализовать
}

/**
 * Возвращает список товаров, у которых одно из полей
 * name, shortDescription или longDescription содержит text.
 *
 * @param {String} text Искомый текст
 * @returns {Object[]}
 */
function getGoodsContainingText(text) {
    // TODO: реализовать
}

/**
 * Возвращает список товаров, у которых id содержится в ids.
 *
 * @param {Set<Number>} ids Множество идентификаторов у искомых товаров
 * @returns {Object[]}
 */
function getGoodsWithIds(ids) {
    // TODO: реализовать
}

/**
 * Высчитывает кол-во лайков для товара с идентификатором goodId.
 *
 * @param goodId
 * @returns {Number} Кол-во лайков на товаре
 */
function getLikesCount(goodId) {
    // TODO: реализовать
}



// ========
// Лайки
// ========

/**
 * Возвращает список идентификаторов товаров, лайкнутых пользователем.
 *
 * @param {String} username Имя пользователя, для которого ищем лайкнутые товары
 * @returns {Number[]} Список лайкнутых пользователем товаров
 */
function getLikesForUsername(username) {
    // TODO: реализовать
}

/**
 * Если пользователь еще не лайкал товар, с переданным orderId,
 * то этот orderId добавляется с список лайков пользователя.
 * Если же пользователь уже лайкал этот товар,
 * то orderId удаляется из списка лайков пользователя.
 *
 * Метод ничего не возвращает.
 *
 * @param {String} username Имя пользователя
 * @param {Number} orderId Ид товара, для которого поставили/сняли лайк
 */
function likeOrUnlikeGood(username, orderId) {
    // TODO: реализовать
}



module.exports = {
    logUp,
    logIn,
    getAllGoods,
    getGoodsWithCategories,
    getGoodsContainingText,
    getGoodsWithIds,
    getLikesCount,
    getLikesForUsername,
    likeOrUnlikeGood
}

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
users.set('Anna', 'smth')
users.set('Mike', 'smth1')
users.set('Ella', 'smth2')
users.set('John', 'smth3')

console.log(users)
/**
 * Содержит список существующих товаров.
 *
 * У товара, помимо естественных полей типа name, categories и т.п.
 * должно присутствовать поле id - уникальный числовой идентификатор.
 *
 * @type {Object[]}
 */
const goods = [
    {
        id: 1,
        imagePath: "/img/acril.jpg",
        name: "Акриловая краска",
        categories: ['краска', 'акрил'],
        shortDescription: 'Акриловые краски Studio Acrylics PEBEO, 100 мл',
        longDescription: 'Французская акриловая краска «Studio Acrylics» от PEBEO для рисования на металле, дереве, холсте, картоне. Краски хорошо смешиваются, не смываются после высыхания, светостойкие, с хорошей адгезией. Благодаря своей густоте, краска сохраняет следы кисти или мастихина, подходит для создания объема. Краска готова к использованию.'
    },
    {
        id: 2,
        imagePath: "/img/maslo.jpg",
        name: "Масляная краска",
        categories: ['краска', 'акрил'],
        shortDescription: 'Краска масляная Сонет, туба 46 мл, красная светлая № 336',
        longDescription: 'Масляные краски Сонет для живописи разработаны по традиционным технологиям с использованием современных материалов, качественных пигментов и связующего по новой рецептуре. Масло Сонет отличается яркостью, чистотой цвета, высокой светостойкостью и пастозностью. Дорогие неорганические пигменты заменены светостойкими органическими, при этом аналоги соответствуют оригинальным цветам по тону.'
    },
    {
        id: 3,
        imagePath: "/img/pastel_2.jpg",
        name: "Пастель сухая",
        categories: ['пастель'],
        shortDescription: 'Mungyo пастель сухая мягкая квадратная (1/2 мелка), 32 цвета',
        longDescription: 'Мягкая сухая пастель Mungyo подходит для новичков, а также для опытных художников. Подходит для работы с фоамираном, а также бумагой (картоном) и керамикой. После нанесения не требует дополнительного закрепления рисунка. Пастель изготовлена из пигментов высокого качества с добавлением карбоната кальция. Производитель: Корея'
    },
    {
        id: 4,
        imagePath: "/img/kisti.jpg",
        name: "Кисти синтетика, набор",
        categories: ['кисти', 'кисти синтетика'],
        shortDescription: 'ROUBLOFF Серия 1222 (длинная ручка, жесткость 1из 4)',
        longDescription: 'Кисть плоская из волоса рыжей мягкой синтетики, обойма медная, хромированная.Ручка длинная, пропитана лаком. Используется для прорисовки прямых линий и прямоугольных форм.Тонкий волос прекрасно подходит для работы с жидкими красками. Кисти не заменимы для нанесения лака. Способна удерживать максимальное количество краски, исходя из того, на что способна синтетика.'
    },
    {
        id: 5,
        imagePath: "/img/paper_3.jpg",
        name: "Бумага для масла и акрила",
        categories: ['бумага', 'масло', 'акрил'],
        shortDescription: 'Блок бумаги для масла Fabriano Tela 300 г/м2, 30x40 см',
        longDescription: 'Бумага для масла "Tela" от Fabriano - это очень прочная высококачественная бумага-картон, с которой будет приятно работать и профессиональным художникам, и начинающим. Данаая бумага не содержит кислот и отбеливающих веществ. Впитывающие свойства бумаги достигаются особой слоистостью, которая ограничивает поглощение масла, связующих веществ и жидкости в допустимых и оптимальных размерах. Бумага имеет фактуру льняного золста и идеально подойдет для масляной живописи. '
    },
    {
        id: 6,
        imagePath: "/img/paper_2.jpg",
        name: "Бумага для пастели",
        categories: ['бумага','пастель'],
        shortDescription: 'LANA Бумага, 160 г/м2',
        longDescription: 'Пастельная бумага Lana — это высококачественная французская бумага для пастели. Бумага имеет плотность 160г/м2, состав 45% хлопка и 55% целлюлозы. Пастельная бумага имеет ячеистую фактуру для работы пастелью, а обратная стороны гладкая. Бумага также подходит для каллиграфии, многие используют как бумагу для карточек, приглашений или работ по каллиграфии и леттеринга.'
    }];



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
    let likedGoods = new Set();
    if (users.has(username)) {
        throw new Error()
    } else {
        users.set(username, {password, likedGoods})
    }
    console.log(users)
}
logUp({username:'smbd', password:'smth1'})
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
    if (users.has(username) && password === users.get(username)) {
        return ('OK')
    }
    else{
        throw new Error()
    }
}
console.log(logIn({username: 'Anna', password: 'smth'}))



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

// console.log(getAllGoods())

/**
 * Возвращает список всех товаров (с их ид, навзанием и пр.), у которых есть все категории,
 * указанные в categories. Если таких товаров нет, то возвращает пустой список
 *
 * @param {String[]} categories Искомые категории
 * @returns {Object[]}
 */
function getGoodsWithCategories(categories) {
     // return goods.filter(function(item) { return item.categories === categories })
    let goodsWithCat = [];
    let haveAllCategories = true;
    let a = 0;
    let b = 0;
    for (const item of goods){
        a = categories.length
        b = item.categories.length
        if (categories.length === item.categories.length) {
            for (const element of categories) {
                 if (item.categories.includes(element)){
                     haveAllCategories=true
                }
            }
        }
    }
    console.log(a,b)
    return goodsWithCat

}
console.log(getGoodsWithCategories(['краска', 'акрил']))

/**
 *
 * Возвращает список товаров, у которых одно из полей
 * name, shortDescription или longDescription содержит text.
 *
 * @param {String} text Искомый текст
 * @returns {Object[]}
 */
function getGoodsContainingText(text) {
    let goodsWithText = []
    for (const item of goods){
        if (item.name.includes(text) || item.shortDescription.includes(text) || item.longDescription.includes(text)){
            goodsWithText.push(item)
        }
    }
    return goodsWithText
}
console.log(getGoodsContainingText('кисть плоская'))

/**
 * Возвращает список товаров, у которых id содержится в ids.
 *
 * @param {Set<Number>} ids Множество идентификаторов у искомых товаров
 * @returns {Object[]}
 */
function getGoodsWithIds(ids) {
    let goodsWithIds = []
    for (const item of goods) {
        if (ids.has(item.id)) {
            goodsWithIds.push(item)
        }
    }
    return goodsWithIds
}
console.log(getGoodsWithIds(new Set([1,5,6])))
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
    const userObject = users.get(username)
    if (userObject.likedGoods.has(orderId)) {
        userObject.likedGoods.delete(orderId)
    } else {
        userObject.likedGoods.add(orderId)
    }
    console.log(userObject.likedGoods, userObject.likedGoods.size)
}
(likeOrUnlikeGood('smbd', 8))
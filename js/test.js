/**
 * Необходимо реализовать методы и поле у объекта listener.
 *
 * В целом суть listener в следующем: сначала объекты регистрируются в listener через метод listener.on,
 * а затем, когда в listener передается событие, все обработчики, которые были зарегистрированы для
 * переданного события, выполняются.
 */
const listener = {
    /**
     * Какой-то объект, который запоминает в себе все обработчики, сохраненные через listener.on().
     * Потом при вызове метода listener.submit("some_event") должны отработать все обработчики,
     * которые были зарегистрированы для "some_event".
     *
     * Может быть любого типа (не обязательно Object), какой посчитается более подходящим.
     */
    handlers: new Map(),
    /**
     * Регистрирует в своем поле handlers для события event обработчик handler.
     * Потом, при вызове listener.submit(event), должен выполниться handler, а контекстом исполнения
     * для handler должен быть context.
     *
     * @param {String} event - Событие, при котором должен выполниться handler
     * @param {Object} context - Контекст исполнения для handler
     * @param {Function} handler - Обработчик события event для объекта context; не имеет входных параметров
     */
    on: function(event, context, handler) {
         let handlerContext = [handler,context];
         let handlersArray = [];
         if (!this.handlers.has(event)){
             handlersArray.push(handlerContext);
             this.handlers.set(event, handlersArray);
         }
         else {
             this.handlers.get(event).push(handlerContext);
         }
    },
    /**
     * Выполняет все обработчики, которые ранее были зарегистрированы для события event.
     * Если для event не существует обработчиков, то не должно возникнуть ошибки, должен быть
     * просто выход из метода.
     *
     * @param event - Событие, для которого должны выполниться зарегистрированные обработчики
     */
    submit: function(event) {

        let handlerArray = this.handlers.get(event);
        for (const item of handlerArray){
            let context = item[1];
            let handler = item[0];
            handler.call(context)
        }
    }
};

// Пример:
const simplePlayer = {
    score: 10
};
const playerWithBoost = {
    score: 10
};

listener.on("next_level", simplePlayer, function() {
    this.score += 1;
});
listener.on("next_level", playerWithBoost, function() {
    this.score += 2;
});
listener.on("boost", playerWithBoost, function() {
    this.score += 3;
});

console.log(listener)

listener.submit("next_level");
console.log(simplePlayer, playerWithBoost)

listener.submit("boost");
console.log(simplePlayer, playerWithBoost)

listener.submit("next_level");
console.log(simplePlayer, playerWithBoost)


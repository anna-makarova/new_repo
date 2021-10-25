/**
 * Класс, предоставляющий функциональность по фильтрации списка товаров
 */
class GoodsFilter {
  /**
   * Принимает на вход список товаров, и возвращает другой список, содержащий
   * те товары, которые подходят под условия, проверяющиеся в методе check(good)
   * @param {Object[]} goods Список товаров
   * @returns {Object[]} Отфильтрованный список товаров
   */
  apply(goods) {
    let result = [];

    for (const good of goods) {
      if (this.check(good)) {
        result.push(good);
      }
    }

    return result;
  }

  /**
   * Проверяет какое-то условие - соответствует ли условию переданный товар
   * или нет
   * @param {Object} good Проверяемый товар
   * @returns {boolean} Соответствует ли товар условию
   */
  check(good) {
    return true;
  }
}

module.exports = GoodsFilter;

const GoodsFilter = require("./GoodsFilter");

/**
 * По заданному множеству id фильтрует список товаров - остаются только те
 * товары, id которых есть в заданном множестве id
 */
class GoodsFilterById extends GoodsFilter {
  ids;

  constructor(ids) {
    super();
    this.ids = ids;
  }

  check(good) {
    return this.ids.has(good.id);
  }
}

module.exports = GoodsFilterById;

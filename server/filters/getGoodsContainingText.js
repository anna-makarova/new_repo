const GoodsFilter = require("./GoodsFilter");

class getGoodsContainingText extends GoodsFilter {
    text;

    constructor(text) {
        super();
        this.text = text;
    }

    check(good) {
        return this.text.has(good.name.text || good.shortDescription.text || good.longDescription.text);
    }
}

module.exports = getGoodsContainingText;
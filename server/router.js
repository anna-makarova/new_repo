const backend = require("./backend");
const express = require("express");
const router = express.Router();


// Пользователи
router.post("/log-up", (req, res) => {
    try {
        backend.logUp(req.body);
        res.sendStatus(200);
    } catch {
        res.status(401).send("Пользователь с указанным логином уже существует");
    }
});
router.post("/log-in", (req, res) => {
    try {
        backend.logIn(req.body);
        res.sendStatus(200);
    } catch {
        res.status(401).send("Неверный логин или пароль");
    }
});


// Лайки
router.get("/likes/:username", (req, res) => {
    res.json(backend.getLikesForUsername(req.params.username));
});
router.post("/likes/:username/:orderId", (req, res) => {
    backend.likeOrUnlikeGood(req.params.username, req.params.orderId);
    res.sendStatus(200);
});


// Товары
router.get("/goods", (req, res) => {
    const text = req.query.text;
    const categories = getArrayFromQueryValue(req.query.categories);
    const ids = getArrayFromQueryValue(req.query.ids);

    if (categories) {
        res.json(backend.getGoodsWithCategories(categories));
    } else if (text) {
        res.json(backend.getGoodsContainingText(text));
    } else if (ids) {
        res.json(backend.getGoodsWithIds(new Set(ids)));
    } else {
        res.json(backend.getAllGoods());
    }
});
router.get("/goods/likes-count", (req, res) => {
   res.json(backend.getLikesCount(req.query["order-id"]));
});



function getArrayFromQueryValue(value) {
    if (!value || value.length === 0) {
        return null;
    } else if (Array.isArray(value)) {
        return value;
    } else {
        return [ value ];
    }
}


module.exports = router;
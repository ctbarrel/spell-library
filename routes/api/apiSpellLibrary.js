var express = require('express');
var router = express.Router();

const db = require('../../db/mongo')

/* GET home page. */
router.get('/', function (req, res, next) {
    const info = {
        query: {},
        collection: req.app.locals.collectionSpells
    }
    db.readAll(info)
    .then(spells => {
        res.json(spells)
    })
    .catch(err => {
        console.log(err)
    })
});

module.exports = router;
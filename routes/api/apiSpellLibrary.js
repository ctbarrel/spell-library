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
})

router.post('/', function (req, res, next) {
    const info = {
        doc: req.body,
        collection: req.app.locals.collectionSpells
    }
    db.createOne(info)
    .then(data => {
        res.json(data.ops[0])
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router;
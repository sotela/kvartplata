/**
 * Created by k.stashkevich on 28.11.2014.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.render('eripParser', { title: 'ЕРИП' });
});

module.exports = router;

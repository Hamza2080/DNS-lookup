var express = require('express');
const { dnsResolver } = require('../controllers/dns.controller');
var router = express.Router();

/* GET users listing. */
router.get('/check-dns', dnsResolver);

module.exports = router;
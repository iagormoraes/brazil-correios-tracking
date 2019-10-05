const express = require('express');
const router = express.Router();

const packageController = require('../controllers/packageController');

//example: `http://localhost:8081/package/OH756347841BR`
router.get('/:package', packageController.getPackage);

// example: http://localhost:8081/package?id[]=OH756347841BR&id[]=OH756347841BR
router.get('/', packageController.getPackages);

module.exports = router;

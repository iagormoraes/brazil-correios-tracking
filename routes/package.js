const express = require('express');
const router = express.Router();

const packageController = require('../controllers/packageController');

//example: `http://localhost:8081/package/OH756347841BR`
router.get('/package/:package', packageController.getPackage);

// example: http://localhost:8081/packages?id[]=OH756347841BR&id[]=OH756347841BR
router.get('/packages', packageController.getPackages);

module.exports = router;

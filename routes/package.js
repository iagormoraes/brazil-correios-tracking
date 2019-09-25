const express = require('express');
const router = express.Router();

const packageController = require('../controllers/packageController');

//example: http://localhost:8081/package/OH756347841BR
router.get("/:package", packageController.getPackage);

module.exports = router;
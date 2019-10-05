const express = require('express');
const router = express.Router();
const packageRouter = require('../routes/package');
const packageMiddleware = require('../middlewares/packageMiddleware');

router.use('/package', packageMiddleware, packageRouter);

module.exports = router;

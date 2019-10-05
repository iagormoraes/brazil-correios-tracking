const express = require('express');
const app = express();
const packageRouter = require('./routes/package');
const packageMiddleware = require('./middlewares/packageMiddleware');

// routes
app.use('/package', packageMiddleware, packageRouter);

/*eslint no-console:*/
app.listen(process.env.PORT || 8081, () => console.log('server running'));

const express = require('express');
const app = express();
const routes = require('./routes');

// routes
app.use('/v1', routes);

/*eslint no-console:*/
app.listen(process.env.PORT || 8081, () => console.log('server running'));

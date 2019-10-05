const app = require('./server');

/*eslint no-console:*/
app.listen(process.env.PORT || 8081, () => console.log('server running'));

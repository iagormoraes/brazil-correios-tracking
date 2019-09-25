const express = require("express");
const app = express();

const packageRouter = require('./routes/package');

app.use('/package', packageRouter);

app.listen(process.env.PORT || 8081, () => console.log("server running"));

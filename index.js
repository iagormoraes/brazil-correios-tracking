const express = require('express');
const app = express();
const getPackageInfo = require('./getPackageInfo');

//example: http://localhost:8081/package/OH756347841BR
app.get('/package/:package', async (req, res) => {
    try {
        const packInfo = await getPackageInfo(req.params.package);

        res.status(200).json(packInfo);
    } catch (error) {
        res.status(404).json(error);
    }
});

app.listen(process.env.PORT || 8081, () => console.log('server running'));

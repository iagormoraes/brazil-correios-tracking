const express = require('express');
const app = express();
const getPackageInfo = require("./getPackageInfo");
const { sortPackInfoByProgress, sortPackHistoryByDate } = require("./utils");
const packageRouter = require('./routes/package');

// routes
app.use(packageRouter);

// example: http://localhost:8081/packages?id=OH756347841BR&id=OH756347841BR
http: app.get("/packages", async (req, res) => {
  try {
    const packageIds = req.query.id;
    const packInfos = [];
    for (let index = 0; index < packageIds.length; index++) {
      const packInfo = await getPackageInfo(packageIds[index]);
      packInfos.push(packInfo);
    }
    packInfos.sort(sortPackInfoByProgress);
    for (let index = 0; index < packInfos.length; index++) {
      const packInfo = packInfos[index];
      packInfo.packHistory = packInfo.packHistory.sort(sortPackHistoryByDate);
    }
    res.status(200).json(packInfos);
  } catch (error) {
    res.status(404).json(error);
  }
});

app.listen(process.env.PORT || 8081, () => console.log("server running"));

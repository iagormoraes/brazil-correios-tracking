const express = require("express");
const app = express();
const getPackageInfo = require("./getPackageInfo");

//example: http://localhost:8081/package/OH756347841BR
app.get("/package", async (req, res) => {
  try {
    console.log('req.query.package', req.query);

    let promises = req.query.package.map(package => {
      return getPackageInfo(package);
    });
    let resolvedPromises = await Promise.all(promises);
    let flags = [];
    let results = [];
    let index = 0;
    console.log(resolvedPromises);

    resolvedPromises.forEach(el =>{
      console.log(el);
      el.packHistory.forEach(pack =>{
        console.log('pack: ', pack);
        console.log('flags:', flags);
        if (!flags[JSON.stringify(pack)]){
          flags[JSON.stringify(pack)] = true;
          results.push(pack);
        }
      })
    });

    console.log('---------------');
    console.log(results);

    const packInfo = await getPackageInfo(req.query.package);

    res.status(200).json(packInfo);
  } catch (error) {
    res.status(404).json(error);
  }
});

app.listen(process.env.PORT || 8082, () => console.log("server running"));

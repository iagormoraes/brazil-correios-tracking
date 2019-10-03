const express = require('express');
const app = express();
const {getPackageInfo, sortByAsc, sortByDesc, sortProgressAsc, sortProgressDesc }= require("./getPackageInfo");

//example: http://localhost:8081/package/OH756347841BR
//sortByProgress - asc or desc
//sortByDate - asc or desc
//http://localhost:8082/package?package=OH756347841BR&package=OH756347841BR&sortByDate=asc
app.get("/package", async (req, res) => {
  try {


    const sortByDate = req.query.sortByDate;
    const sortByProgress = req.query.sortByProgress;

    let promises = await Promise.all(req.query.package.map(package => {
      return getPackageInfo(package);
    }));

    let flags = [];
    let results = [];
    let index = 0;
 
    //Remove duplicates if there are any in results.
    promises.forEach(el =>{
 
      el.packHistory.forEach(pack =>{
      
        if (!flags[JSON.stringify(pack)]){
          flags[JSON.stringify(pack)] = true;
          results.push(pack);
        }
      })
    });

   
    //Sort by parameter.
    if (sortByDate){
      if(sortByDate.toLowerCase() === 'asc'){
        results = results.sort(sortByAsc);
      } else if (sortByDate.toLowerCase() === 'desc'){
        results = results.sort(sortByDesc);
      }
    } else if (sortByProgress){
      if(sortByProgress.toLowerCase() === 'asc'){
        results = results.sort(sortProgressAsc);
      } else if (sortByProgress.toLowerCase() === 'desc'){
        results = results.sort(sortProgressDesc);
      }
    }

    res.status(200).json(results);
  } catch (error) {
    res.status(404).json(error);
  }
});

app.listen(process.env.PORT || 8081, () => console.log("server running"));

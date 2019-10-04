const packageService = require('../services/packageService');
const { sortPackInfoByProgress, sortPackHistoryByDate } = require('../utils');
const PackageController = {};

PackageController.getPackage = async (req, res) => {
    try {
        const packInfo = await packageService.getPackageInfo(req.params.package);
        res.status(200).json(packInfo);
    } catch (error) {
        res.status(404).json(error);
    }
};

PackageController.getPackages = async (req, res) => {
    try {
        const packageIds = req.query.id;
        const packInfos = [];
        for (let index = 0; index < packageIds.length; index++) {
            const packInfo = await packageService.getPackageInfo(packageIds[index]);
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
};

module.exports = PackageController;

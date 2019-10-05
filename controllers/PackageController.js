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
        const promises = [];

        if (!Array.isArray(packageIds)) throw 'must receive list of packages';

        packageIds.forEach(packageId => {
            promises.push(packageService.getPackageInfo(packageId));
        });

        let packList = (await Promise.all(promises))
            .map(package => {
                return {
                    ...package,
                    packHistory: package.packHistory.sort(sortPackHistoryByDate),
                };
            })
            .sort(sortPackInfoByProgress);

        res.status(200).json(packList);
    } catch (error) {
        res.status(404).json(error);
    }
};

module.exports = PackageController;

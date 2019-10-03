const packageService = require('../services/packageService');

const PackageController = {};

PackageController.getPackage = async (req, res) => {
    try {
        const packInfo = await packageService.getPackageInfo(req.params.package);
        res.status(200).json(packInfo);
    } catch (error) {
        res.status(404).json(error);
    }
};

module.exports = PackageController;

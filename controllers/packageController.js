const Promise = require('bluebird');
const status = require('http-status');
const packageService = require('../services/packageService');
const { sortPackInfoByProgress, sortPackHistoryByDate } = require('../utils');

exports.getPackage = async (req, res) => {
    try {
        const packInfo = await packageService.getPackageInfo(req.params.package);

        res.status(status.OK).json({ ...packInfo, ...req.requestUser });
    } catch (error) {
        res.status(status.NOT_FOUND).json(error);
    }
};

exports.getPackages = async (req, res) => {
    try {
        const packageIds = req.query.id;

        if (!Array.isArray(packageIds)) throw new Error('must receive list of packages');

        const packList = await Promise.map(packageIds, async id => {
            const pack = await packageService.getPackageInfo(id);
            return {
                ...pack,
                packHistory: pack.packHistory.sort(sortPackHistoryByDate),
            };
        });

        await packList.sort(sortPackInfoByProgress);

        res.status(status.OK).json({ packList, ...req.requestUser });
    } catch (error) {
        const { message } = error;
        res.status(status.NOT_FOUND).json({ message });
    }
};

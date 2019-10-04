const sortPackInfoByProgress = (previousPackInfo, nextPackInfo) => {
    previousPackInfo.progress > nextPackInfo.progress ? -1 : 1;
};

const sortPackHistoryByDate = (previousPackHistory, nextPackHistory) => {
    const previousDate = new Date(previousPackHistory.info.date);
    const nextDate = new Date(nextPackHistory.info.date);

    return previousDate - nextDate;
};

module.exports = {
    sortPackInfoByProgress,
    sortPackHistoryByDate,
};

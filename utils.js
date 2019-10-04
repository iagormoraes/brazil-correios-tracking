const sortPackInfoByProgress = (previousPackInfo, nextPackInfo) => {
  previousPackInfo.progress > nextPackInfo.progress ? -1 : 1;
};

const sortPackHistoryByDate = (previousPackHistory, nextPackHistory) => {
  var previousDate = new Date(previousPackHistory.info.date);
  var nextDate = new Date(nextPackHistory.info.date);
  return previousDate - nextDate;
};

module.exports = {
  sortPackInfoByProgress,
  sortPackHistoryByDate
};

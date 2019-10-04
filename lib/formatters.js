const formatDate = str => {
    const MATCH_DATE = str.match(/(\d{2}\/\d{2}\/\d{4})/gm, '$1');

    if (MATCH_DATE) {
        return MATCH_DATE[0].replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3/$2/$1');
    }
};

const formatLocal = str => {
    const MATCH_LOCAL = str.match(/([A-Z ])+\/([A-Z ])+/gm, '$1');

    if (MATCH_LOCAL) {
        return MATCH_LOCAL[0];
    }
};

const formatHour = str => {
    const MATCH_HOUR = str.match(/(\d{2}:\d{2})/gm, '$1');

    if (MATCH_HOUR) {
        return MATCH_HOUR[0];
    }
};

const formatType = str => {
    const TYPE_PATTERN = /<strong>(.*?)<\/strong>/gim;
    const MATCH_TYPE = str.match(TYPE_PATTERN, '$1');

    if (MATCH_TYPE) {
        return MATCH_TYPE[0].replace(TYPE_PATTERN, '$1');
    }
};

const formatDescription = str => {
    const MATCH_DESC = str.match(/(<br>[\W\S]+)+/gim, '$1');

    if (MATCH_DESC) {
        return MATCH_DESC[0].replace(/<br>/gim, '').trim();
    }
};

module.exports = {
    formatDate,
    formatLocal,
    formatHour,
    formatType,
    formatDescription,
};

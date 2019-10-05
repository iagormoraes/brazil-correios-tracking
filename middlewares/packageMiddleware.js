const packageMiddleware = (req, _, next) => {
    req.requestUser = {
        userAgent: req.get('user-agent'),
        acceptLanguage: req.get('accept-language'),
        ip: req.ip,
        requestedDate: new Date(),
    };

    next();
};

module.exports = packageMiddleware;

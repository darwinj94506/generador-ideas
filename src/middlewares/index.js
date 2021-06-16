module.exports = {
    NotFoundMiddleware : require('./not-found.middleware'),
    ErrorMiddleware: require('./error.middleware'),
    AuthMiddleware: require("./auth.middleware"),
    ParseIntMiddleware: require("./parse-init.middleware"),
    CacheMiddleware: require("./cache.middleware")
}
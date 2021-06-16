const { Router } = require("express");
const { ParseIntMiddleware, CacheMiddleware } = require("../middlewares");
const { CACHE_TIME } = require("../helpers");
module.exports = function({ UserController }){
    const router = Router();
    router.get("/:userId", [ParseIntMiddleware, CacheMiddleware(CACHE_TIME.ONE_HOUR)] ,UserController.get);
    router.patch("/:userId", UserController.update);
    router.delete("/:userId", UserController.delete);
    return router;
}

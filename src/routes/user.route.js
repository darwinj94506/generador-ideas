const { Router } = require("express");
const { ParseIntMiddleware } = require("../middlewares");

module.exports = function({ UserController }){
    const router = Router();
    router.get("/:userId", ParseIntMiddleware ,UserController.get);
    router.patch("/:userId", UserController.update);
    router.delete("/:userId", UserController.delete);
    return router;
}

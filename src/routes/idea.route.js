const { Router } = require("express");
const { ParseIntMiddleware, AuthMiddleware } = require("../middlewares");

module.exports = function({ IdeaController }){
    const router = Router();
    router.get("", ParseIntMiddleware, IdeaController.getAll);
    router.get("/:ideaId", IdeaController.get);
    router.get("/:userId/all", AuthMiddleware, IdeaController.getUserIdeas);
    router.post("", IdeaController.create);
    router.patch("/:ideaId", IdeaController.update);
    router.delete("/:ideaId", IdeaController.delete);
    router.post(":ideaId/upvote", IdeaController.upvote);
    router.post(":ideaId/downvote", IdeaController.downvote);
    return router;
}

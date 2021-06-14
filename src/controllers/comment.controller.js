let _commentService = null;
class CommentController {
    
    constructor({CommentService}){
        _commentService = CommentService
    }

    async get(req, res){
        const { commentId } = req.params;
        const comment = await _commentService.get(commentId) 
        return res.send(comment);
    }

    async create(req, res){
        const { body } = req;
        const createdComment = await _commentService.create(body)
        res.status(201).send(createdComment);
    }    

    async update(req, res){
        const { body } = req;
        const { commentId } = req.params;
        const updatedComment= await _commentService.update(commentId, body);
        return res.send(updatedComment);
    }

    async delete(req, res){
        const {commentId } = req.params; 
        const deletedComment = await _commentService.delete(commentId);
        return res.send(deletedComment)
    }

    async getIdeaComments(){
        const {ideaId} = req.params;
        const comments = await _commentService.getIdeaComments(ideaId);
        return res.send(comments);
    }


    // async upvoteIdea( req, res){
    //     const { ideaId } = req.params;
    //     const idea = await _ideaService.upvoteIdea(ideaId);
    //     return res.send(idea);
    // }

    // async downvoteIdea( req, res){
    //     const { ideaId } = req.params;
    //     const idea = await _ideaService.downvoteIdea(ideaId);
    //     return res.send(idea);
    // }


}
module.exports = CommentController;
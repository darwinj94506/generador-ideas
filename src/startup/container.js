const { createContainer, asClass, asValue, asFunction } = require("awilix");

//config
const config = require("../config");

const app = require("./index");
//models 
const { Comment, Idea, User } = require('../models');

const { CommentRepository, IdeaRepository, UserRepository} = require("../repositores");
//services
const { HomeService,
        CommentService,
        UserService,
        IdeaService } = require("../services");

//controllers
const { HomeController, 
    UserController, 
    CommentController, 
    IdeaController } = require('../controllers');

const { HomeRoutes, UserRoutes, CommentRoutes, IdeaRoutes } = require("../routes/index.routes");
const Routes = require("../routes"); 

const container = createContainer();

container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        UserRepository: asClass(UserRepository).singleton(),
        IdeaRepository: asClass(IdeaRepository).singleton(),
        CommentRepository : asClass(CommentRepository).singleton()
    })
    .register({
        HomeService: asClass(HomeService).singleton(),
        UserService : asClass(UserService).singleton(),
        CommentService : asClass(CommentService).singleton(),
        IdeaService : asClass(IdeaService).singleton()
    })
    .register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton(),
        UserController: asClass(UserController.bind(UserController)).singleton(),
        CommentController: asClass(CommentController.bind(CommentController)).singleton(),
        IdeaController: asClass(IdeaController.bind(IdeaController)).singleton()
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton(),
        UserRoutes: asFunction(UserRoutes).singleton(),
        CommentRoutes: asFunction(CommentRoutes).singleton(),
        IdeaRoutes: asFunction(IdeaRoutes).singleton()
    })
    .register({
        User: asValue(User),
        Idea: asValue(Idea),
        Comment: asValue(Comment)
    })
    

module.exports = container;
const { createContainer, asClass, asValue, asFunction } = require("awilix");

//config
const config = require("../config");

const app = require("./index");

//services
const { HomeService,
        CommentService,
        UserService,
        IdeaService } = require("../services");

//controllers
const { HomeController } = require('../controllers');

const { HomeRoutes } = require("../routes/index.routes");
const Routes = require("../routes"); 

//models 
const { Comment, Idea, User } = require('../models');

const { CommentRepository, IdeaRepository, UserRepository} = require("../repositores");

const container = createContainer();

container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        HomeService: asClass(HomeService).singleton(),
        UserService : asClass(UserService).singleton(),
        CommentService : asClass(CommentService).singleton(),
        IdeaService : asClass(IdeaService).singleton(),
    })
    .register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton()
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton()
    })
    .register({
        User: asValue(User),
        Idea: asValue(Idea),
        Comment: asValue(Comment)
    })
    .register({
        UserRepository: asClass(UserRepository).singleton(),
        IdeaRepository: asClass(IdeaRepository).singleton(),
        CommentRepository : asClass(CommentRepository).singleton()
    })
    .register({

    })

module.exports = container;
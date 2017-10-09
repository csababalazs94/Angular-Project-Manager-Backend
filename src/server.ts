import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyparser from 'body-parser';
import * as morgan from 'morgan';
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as cors from 'cors';

// import routers
import PostRouter from './router/PostRouter';
import UserRouter from './router/UserRouter';
import ReleaseIterationRouter from './router/ReleaseIterationRouter';
import SprintRouter from './router/SprintRouter';
import TeamRouter from './router/TeamRouter';
import UserStoryRouter from './router/UserStoryRouter';

// Server class
class Server {
    public app: express.Application;

    constructor (){
        this.app = express();
        this.config();
        this.routes();
    }

    public config(){
        //set up mongoose
        const MONGO_URI = 'mongodb://localhost/NodeRESTTSMONGODB';
        mongoose.connect(MONGO_URI || process.env.MONGODB_URL);

        //config
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({extended: true}));
        //this.app.use(logger('dev'));
        this.app.use(helmet());        
        this.app.use(compression());
        this.app.use(cors());

    }

    public routes(): void{
        let router: express.Router;
        router = express.Router();

        this.app.use('/', router);
        this.app.use('/api/v1/posts', PostRouter);
        this.app.use('/api/v1/users', UserRouter);
        this.app.use('/api/v1/releases', ReleaseIterationRouter);
        this.app.use('/api/v1/sprints', SprintRouter);
        this.app.use('/api/v1/teams', TeamRouter);
        this.app.use('/api/v1/userstories', UserStoryRouter);

    }
}

export default new Server().app;
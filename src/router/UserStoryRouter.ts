import {Router, Request, Response, NextFunction} from 'express';
import UserStory from '../models/UserStory';
import Status from '../models/UserStory';


export class UserStoryRouter {

        router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

      public GetUserStorys(req: Request, res: Response): void{
        UserStory.find({})
        .then((data) => {
            const status = res.statusCode;
            res.status(200).json({
                status,
                data
            });
        })
        .catch((err) => {
            const status = res.statusCode;
            res.json({
                status,
                err
            });
        })
    }

    public GetUserStory(req: Request, res: Response): void{
        const id: Number = req.params.id;

        UserStory.findOne({id})
        .then((data) => {
            const status = res.statusCode;
            res.status(200).json({
                status,
                data
            });
        })
        .catch((err) => {
            const status = res.statusCode;
            res.json({
                status,
                err
            });
        })
    }

    public CreateUserStory(req: Request, res: Response): void{
        const point: Number  = req.body.point;

        const post = new UserStory({
           point
        });

        post.save()
        .then((data) => {
            const status = res.statusCode;
            res.status(200).json({
                status,
                data
            });
        })
        .catch((err) => {
            const status = res.statusCode;
            res.json({
                status,
                err
            });
        })
    }

    public UpdateUserStory(req: Request, res: Response): void{
        const id:Number = req.params.id;
        
        UserStory.findOneAndUpdate({id}, req.body)
        .then((data) => {
            const status = res.statusCode;
            res.status(200).json({
                status,
                data
            });
        })
        .catch((err) => {
            const status = res.statusCode;
            res.json({
                status,
                err
            });
        })
    }

    public DeleteUserStory(req: Request, res: Response): void{
        const id: Number = req.params.id;
        
        UserStory.findOneAndRemove({id})
        .then((data) => {
            const status = res.statusCode;
            res.status(200).json({
                status,
                data
            });
        })
        .catch((err) => {
            const status = res.statusCode;
            res.json({
                status,
                err
            });
        })
    }
    routes(){
        this.router.get('/', this.GetUserStorys);
        this.router.get('/:_id', this.GetUserStory);
        this.router.post('/', this.CreateUserStory);
        this.router.put('/:_id', this.UpdateUserStory);
        this.router.delete('/:_id', this.DeleteUserStory);
            
    }
}

//export
const userStoryRoutes = new UserStoryRouter();
userStoryRoutes.routes();
export default userStoryRoutes.router;
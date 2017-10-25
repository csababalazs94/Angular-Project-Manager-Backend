import {Router, Request, Response, NextFunction} from 'express';
import Team from '../models/Team';
import User from '../models/User';


export class TeamRouter {

        router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

      public GetTeams(req: Request, res: Response): void{
        Team.find({})
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

    public GetTeam(req: Request, res: Response): void{
        const _id: String = req.params._id;

        Team.findOne({_id})
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

    public CreateTeam(req: Request, res: Response): void{
        const name: String = req.body.name;

        const post = new Team({
            name
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

    public UpdateTeam(req: Request, res: Response): void{
        const _id: String = req.params._id;
        
        Team.findOneAndUpdate({_id}, req.body)
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

    public DeleteTeam(req: Request, res: Response): void{
        const _id: String = req.params._id;
        
        Team.findOneAndRemove({_id})
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
        this.router.get('/', this.GetTeams);
        this.router.get('/:_id', this.GetTeam);
        this.router.post('/', this.CreateTeam);
        this.router.put('/:_id', this.UpdateTeam);
        this.router.delete('/:_id', this.DeleteTeam);
    }
}

//export
const teamRoutes = new TeamRouter();
teamRoutes.routes();
export default teamRoutes.router;
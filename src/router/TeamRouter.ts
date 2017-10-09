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
        const name: String = req.params.name;

        Team.findOne({name})
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
        const members: Array<User> = req.body.members;
        const PO: User = req.body.PO;
        const SM: User = req.body.SM;
        const currentvelocity: Number = req.body.currentvelocity

        const post = new Team({
            name,members, PO, SM,currentvelocity
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
        const name: String = req.params.name;
        
        Team.findOneAndUpdate({name}, req.body)
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
        const name: String = req.params.name;
        
        Team.findOneAndRemove({name})
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
        this.router.get('/', this.GetTeam);
        this.router.post('/', this.CreateTeam);
        this.router.put('/', this.UpdateTeam);
        this.router.delete('/', this.DeleteTeam);
            
    }
}

//export
const teamRoutes = new TeamRouter();
teamRoutes.routes();
export default teamRoutes.router;
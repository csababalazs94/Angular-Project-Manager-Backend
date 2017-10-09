import {Router, Request, Response, NextFunction} from 'express';
import Sprint from '../models/Sprint';
import Team from '../models/Team';


export class SprintRouter {

        router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

      public GetSprints(req: Request, res: Response): void{
        Sprint.find({})
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

    public GetSprint(req: Request, res: Response): void{
        const startdate: Date = req.params.startdate;

        Sprint.findOne({startdate})
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

    public CreateSprint(req: Request, res: Response): void{
        const number: Number = req.body.number;
        const teams: Array<Team> = req.body.sprints;
        const startdate: Date = req.body.startdate;
        const enddate: Date = req.body.enddate;
        const userstories: UserStory[] = req.body.userstories

        const post = new Sprint({
            number,teams,startdate,enddate,userstories
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

    public UpdateSprint(req: Request, res: Response): void{
        const startdate: string = req.params.startdate;
        
        Sprint.findOneAndUpdate({startdate}, req.body)
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

    public DeleteSprint(req: Request, res: Response): void{
        const startdate: string = req.params.startdate;
        
        Sprint.findOneAndRemove({startdate})
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
        this.router.get('/', this.GetSprints);
        this.router.get('/:slug', this.GetSprint);
        this.router.post('/', this.CreateSprint);
        this.router.put('/:slug', this.UpdateSprint);
        this.router.delete('/:slug', this.DeleteSprint);
            
    }

}

//export
const sprintRoutes = new SprintRouter();
sprintRoutes.routes();
export default sprintRoutes.router;
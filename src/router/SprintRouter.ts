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
        const _id: Date = req.params._id;

        Sprint.findOne({_id})
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
        const startdate: Date = req.body.startdate;
        const enddate: Date = req.body.enddate;

        const post = new Sprint({
            number,startdate,enddate
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
        const _id: string = req.params._id;
        
        Sprint.findOneAndUpdate({_id}, req.body)
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
        const _id: string = req.params._id;
        
        Sprint.findOneAndRemove({_id})
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
        this.router.get('/:_id', this.GetSprint);
        this.router.post('/', this.CreateSprint);
        this.router.put('/:_id', this.UpdateSprint);
        this.router.delete('/:_id', this.DeleteSprint);
            
    }

}

//export
const sprintRoutes = new SprintRouter();
sprintRoutes.routes();
export default sprintRoutes.router;
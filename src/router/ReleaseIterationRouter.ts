import {Router, Request, Response, NextFunction} from 'express';
import ReleaseIteration from '../models/ReleaseIteration';
import Sprint from  '../models/Sprint';

export class ReleaseIterationRouter {

        router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

      public GetReleaseIterations(req: Request, res: Response): void{
        ReleaseIteration.find({})
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

    public GetReleaseIteration(req: Request, res: Response): void{
        const name: string = req.params.name;

        ReleaseIteration.findOne({name})
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

    public CreateReleaseIteration(req: Request, res: Response): void{
        const name: string = req.body.name;
        const sprints: Sprint[] = req.body.sprints;
        const startdate = req.body.startdate;
        const enddate = req.body.enddate;

        const post = new ReleaseIteration({
            name,sprints,startdate, enddate
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

    public UpdateReleaseIteration(req: Request, res: Response): void{
        const name: string = req.params.name;
        
        ReleaseIteration.findOneAndUpdate({name}, req.body)
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

    public DeleteReleaseIteration(req: Request, res: Response): void{
        const name: string = req.params.name;
        
        ReleaseIteration.findOneAndRemove({name})
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
        this.router.get('/', this.GetReleaseIterations);
        this.router.get('/:slug', this.GetReleaseIteration);
        this.router.post('/', this.CreateReleaseIteration);
        this.router.put('/:slug', this.UpdateReleaseIteration);
        this.router.delete('/:slug', this.DeleteReleaseIteration);
            
    }

}

//export
const releaseIterationRoutes = new ReleaseIterationRouter();
releaseIterationRoutes.routes();
export default releaseIterationRoutes.router;
import {Request, Response, Router} from "express";
export const API = Router();

API.get('/', (req: Request,res: Response)=>{
    res.send({status:'ok'})
});



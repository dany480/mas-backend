import {Request, Response} from 'express'
import {CreateActivyService} from '../services/CreateActivyServicies'
import { GetActivyService } from '../services/GetActiviesService';



class ActivyController{
    async create(req: Request, res: Response){
        const activyData = req.body;

        const createActivy = new CreateActivyService();

        const activy = await createActivy.execute(activyData);

        return res.json(activy);
    }

    async show(req: Request, res: Response){
        const userId = req.body.user;

        const getActivies = new GetActivyService();

        const activies = await getActivies.execute(userId);

        return res.json(activies);
    }

}


export{ActivyController} 
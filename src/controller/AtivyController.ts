import {Request, Response} from 'express'
import {CreateActivyServicies} from '../services/CreateActivyServicies'
import { GetActiviesService } from '../services/getActiviesService';



class ActivyController{
    async create(req: Request, res: Response){
        const activyData = req.body;

        const createActivy = new CreateActivyServicies();

        const activy = await createActivy.execute(activyData);

        return res.json(activy);
    }

    async show(req: Request, res: Response){
        const userId = req.body.user;

        const getActivies = new GetActiviesService();

        const activies = await getActivies.execute(userId);

        return res.json(activies);
    }

}


export{ActivyController} 
import {Request, Response} from 'express'
import {CreateActivyServicies} from '../services/CreateActivyServicies'


class ActivyController{
    async create(req: Request, res: Response){
        const activyData = req.body;

        const createActivy = new CreateActivyServicies();

        const activy = await createActivy.execute(activyData);

        return res.json(activy);
    }
}


export{ActivyController} 
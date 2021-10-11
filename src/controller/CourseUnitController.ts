import {Request, Response} from 'express'
import {CreateCourseUnitServicies} from '../services/CreateCourseUnitServicies'

class CourseUnitController{
    async create(req: Request, res: Response){
        const courseUnitData = req.body;

        const createCourseUnit = new CreateCourseUnitServicies();

        const courseUnit = await createCourseUnit.execute(courseUnitData);

        return res.json(courseUnit);
    }

}


export{CourseUnitController} 
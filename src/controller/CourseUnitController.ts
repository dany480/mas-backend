import {Request, Response} from 'express'
import {CreateCourseUnitServicies} from '../services/CreateCourseUnitServicies'
import {GetCourseUnitsService} from '../services/GetCourseUnitService'

class CourseUnitController{
    async create(req: Request, res: Response){
        const courseUnitData = req.body;

        const createCourseUnit = new CreateCourseUnitServicies();

        const courseUnit = await createCourseUnit.execute(courseUnitData);

        return res.json(courseUnit);
    }

    async show(req: Request, res: Response){
        const userId = req.body.user;

        const getCourseUnit = new GetCourseUnitsService();

        const courseUnits = await getCourseUnit.execute(userId);

        return res.json(courseUnits);
        
    }


}


export{CourseUnitController} 
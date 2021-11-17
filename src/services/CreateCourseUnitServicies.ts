import {getRepository} from 'typeorm'
import {CourseUnit} from '../models/CourseUnit'

interface CourseUnitData{
    name: string;
    description: string;
}

class CreateCourseUnitServicies{

    async execute (data : CourseUnitData){

        const {name,description} = data;

        const courseUnitRepository = getRepository(CourseUnit);

        const checkCourseUnitExists = await courseUnitRepository.findOne({name});

        if (checkCourseUnitExists){
            return {erro: "CourseUnit already exists"}

        }

        const courseUnit = courseUnitRepository.create({
           name,
           description
        });

        await courseUnitRepository.save(courseUnit);

        return courseUnit;
    }
}

export {CreateCourseUnitServicies};
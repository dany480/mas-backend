import {getRepository} from 'typeorm'
import {CourseUnit} from '../models/CourseUnit'

interface ActivyData{
    name: string;
    description: string;
}

class CreateCourseUnitServicies{
    async execute ({name,description} : ActivyData){
        const activyRepository = getRepository(CourseUnit);

        const courseUnit = activyRepository.create({
           name,
           description
        });

        await activyRepository.save(courseUnit);

        const checkActivyExists = await activyRepository.save (courseUnit);


    }
}

export {CreateCourseUnitServicies};
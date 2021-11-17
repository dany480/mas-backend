import {getRepository} from 'typeorm'
import {Activy} from '../models/Activy'

interface ActivyData{
    name: string;
    activy_date: string;
    grade: number;
    courseUnitId: string;
}

class CreateActivyServicies{
    async execute (data : ActivyData){

        const {name,activy_date,courseUnitId, grade} = data;

        const activyRepository = getRepository(Activy);

        const checkActivyToCourseUnitExists = await activyRepository.findOne({name, courseUnitId});

        if (checkActivyToCourseUnitExists){
            return {erro: "Activy to Course Unit already exist"}
        }

        const activy = activyRepository.create({
            name, 
            activy_date, 
            courseUnitId,
            grade
        });

        await activyRepository.save(activy);

        return activy;
    }
}

export {CreateActivyServicies};
import {getRepository} from 'typeorm'
import {hash} from 'bcryptjs'
import { User } from '../models/User'

interface UserData{
    name: string;
    email: string;
    password: string;
}

class CreateUserService {

    public async execute (data:UserData){

        const {name, email, password} = data;

        const userRepository = getRepository(User); 

        const checkUserExists = await userRepository.findOne({email});

        if (checkUserExists){
            return {error:"Email adrres already exist"}
        }

        const hashedPassword = await hash(password, 8);

        const user = {
            name, 
            email, 
            password : hashedPassword
        }

        await userRepository.save(user);

        return user;
    }
}

export {CreateUserService}
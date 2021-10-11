import {Column, CreateDateColumn, Entity,OneToMany, PrimaryColumn} from "typeorm"
import { Activy } from "./Activy";
import {v4 as uuid} from 'uuid';

@Entity()
class CourseUnit{

    constructor (){
        if (!this.id){
            this.id = uuid()
        }
    }
    @PrimaryColumn()
    readonly id: string;

    @Column()
    description: string;

    @Column()
    name:string;

    @CreateDateColumn()
    create_at: Date;

    @OneToMany(() => Activy, activy => activy.unidade_curricular)
    activies: Activy[];
}

export{CourseUnit}
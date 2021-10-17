import {Column, CreateDateColumn, Entity,OneToMany, PrimaryColumn} from "typeorm"
import { Activy } from "./Activy";
import {v4 as uuid} from 'uuid';

@Entity("course_units")
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
    created_at: Date;

    @OneToMany(() => Activy, activy => activy.course_unit)
    activies: Activy[];
}

export{CourseUnit}
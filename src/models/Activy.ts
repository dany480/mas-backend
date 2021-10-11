import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn} from 'typeorm'

import {v4 as uuid} from 'uuid';
import { CourseUnit } from './CourseUnit';

@Entity("activy")
class Activy{
    
    constructor (){
        if (!this.id){
            this.id = uuid()
        }
    }
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    activy_date: string;

    @Column()
    course_unit_id: string;

    @CreateDateColumn()
    create_at: Date;

    @ManyToOne(() => CourseUnit, unidade_curricular => unidade_curricular.activies )
    unidade_curricular : CourseUnit;
}

export {Activy}
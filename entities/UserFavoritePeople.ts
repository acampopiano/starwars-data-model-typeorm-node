import {
    Entity, Column, PrimaryGeneratedColumn, ManyToOne,
    BaseEntity, JoinTable
} from 'typeorm';

import { User } from "./User"
import { People } from "./People"
@Entity()
export class UserFavoritePeople extends BaseEntity {
    @PrimaryGeneratedColumn()
    user_id_id: number;
    @PrimaryGeneratedColumn()
    people_id: number;
    
    //Relationship with people(many userfavoritepeople to one people)
    @ManyToOne(() => People, people => people.id)
    people: People;
    
    //Relationship with user(many userfavoritepeople to one user)
    @ManyToOne(() => User, user => user.id)
    user: User;
}
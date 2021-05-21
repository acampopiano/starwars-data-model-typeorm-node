import {
    Entity, Column, PrimaryGeneratedColumn, ManyToOne,
    BaseEntity, JoinTable
} from 'typeorm';

import { User } from "./User"
import { Vehicles } from "./Vehicles"
@Entity()
export class UserFavoriteVehicles extends BaseEntity {
    @PrimaryGeneratedColumn()
    user_id_id: number;
    @PrimaryGeneratedColumn()
    vehicle_id: number;
    
    //Relationship with vehicles(many userfavoriteplanets to one vehicle)
    @ManyToOne(() => Vehicles, vehicle => vehicle.id)
    vehicles: Vehicles;
    
    //Relationship with user(many userfavoritepeople to one user)
    @ManyToOne(() => User, user => user.id)
    user: User;
}
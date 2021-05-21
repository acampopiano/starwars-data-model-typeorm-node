import {
    Entity, Column, PrimaryGeneratedColumn, ManyToOne,
    BaseEntity, JoinTable
  } from 'typeorm';
  
  import {People} from "./People"
  @Entity()
  export class PeopleVehicle extends BaseEntity{
    @PrimaryGeneratedColumn()
    people_id: number;
    @PrimaryGeneratedColumn()
    vehicle_id : number;



  }
import {
    Entity, Column, PrimaryGeneratedColumn, OneToMany, 
    BaseEntity, JoinTable
  } from 'typeorm';
  
  // import {Planet} from "./Planet"
  @Entity()
  export class Vehicles extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({unique: true})
    name: string;
  
    @Column()
    model: string;
  
    @Column()
    vehicle_class: string;
  
    @Column()
    manufacturer: string;
  
    @Column()
    cost_in_credits: number;

    @Column()
    length: number;

    @Column()
    crew: number;

    @Column()
    passengers: number;

    @Column()
    max_atmosphering_speed: number;

    @Column()
    cargo_capacity: number;

    @Column()
    consumables: string;
    
    @Column()
    imageURL: string;
    
  }
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cohort {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cohortName: string;

  @Column()
  cohortId: number;

  @Column()
  startDate: string;

  @Column()
  endDate: string;
}

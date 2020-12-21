import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cohort {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cohort_id: string;

  @Column()
  learn_id: number;

  @Column()
  product_code: string;

  @Column()
  rotation_id: string;

  @Column()
  schedule: string;

  @Column()
  start_date: Date;

  @Column()
  grad_date: Date;

  @Column()
  fifty_percent: Date;

  @Column()
  sixty_percent: Date;

  @Column()
  google_calendar_id: string;

  @Column()
  cohort_lead: string;

  @Column()
  tech_mentor: string;

  @Column()
  senior_phase_begins: Date;

  @Column()
  fec_start: Date;

  @Column()
  sdc_start: Date;

  @Column()
  outcome_start: Date;

  @Column()
  solo_1_start: Date;

  @Column()
  solo_1_end: Date;

  @Column()
  solo_2_start: Date;

  @Column()
  solo_2_end: Date;

  @Column()
  holiday_1_start: Date;

  @Column()
  holiday_1_end: Date;

  @Column()
  holiday_2_start: Date;

  @Column()
  holiday_2_end: Date;
}

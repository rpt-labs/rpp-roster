import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cohort {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cohort_id: string;

  @Column({ nullable: true })
  learn_id: number;

  @Column({ nullable: true })
  product_code: string;

  @Column({ nullable: true })
  rotation_id: string;

  @Column({ nullable: true })
  schedule: string;

  @Column()
  start_date: Date;

  @Column()
  grad_date: Date;

  @Column({ nullable: true })
  fifty_percent: Date;

  @Column({ nullable: true })
  sixty_percent: Date;

  @Column({ nullable: true })
  google_calendar_id: string;

  @Column({ nullable: true })
  cohort_lead: string;

  @Column({ nullable: true })
  tech_mentor: string;

  @Column({ nullable: true })
  senior_phase_begins: Date;

  @Column({ nullable: true })
  fec_start: Date;

  @Column({ nullable: true })
  sdc_start: Date;

  @Column({ nullable: true })
  outcome_start: Date;

  @Column({ nullable: true })
  solo_1_start: Date;

  @Column({ nullable: true })
  solo_1_end: Date;

  @Column({ nullable: true })
  solo_2_start: Date;

  @Column({ nullable: true })
  solo_2_end: Date;

  @Column({ nullable: true })
  holiday_1_start: Date;

  @Column({ nullable: true })
  holiday_1_end: Date;

  @Column({ nullable: true })
  holiday_2_start: Date;

  @Column({ nullable: true })
  holiday_2_end: Date;
}

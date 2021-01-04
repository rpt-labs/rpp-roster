import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'candidate' })
  status: string;

  @Column()
  first_name: string;

  @Column({ nullable: true })
  preferred_name: string;

  @Column({ nullable: true })
  pronounced_name: string;

  @Column()
  last_name: string;

  @Column({ nullable: true })
  zoom_name: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  github: string;

  @Column({ nullable: true })
  state_of_residence: string;

  @Column({ nullable: true })
  country_of_residence: string;

  @Column({ nullable: true })
  ever_attended: string;

  @Column({ nullable: true })
  departure_reason: string;

  @Column({ nullable: true })
  date_of_separation: Date;

  @Column({ nullable: true })
  seir: boolean;

  @Column({ nullable: true })
  pronouns: string;

  @Column({ nullable: true })
  has_accommodations: boolean;

  @Column({ nullable: true })
  salesforce_contact_record: string;
}

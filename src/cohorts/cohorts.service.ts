import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cohort } from './cohort.entity';

@Injectable()
export class CohortsService {
  constructor(
    @InjectRepository(Cohort)
    private cohortRepository: Repository<Cohort>,
  ) {}
  async findAll(): Promise<Cohort[]> {
    return await this.cohortRepository.find();
  }

  async create(cohort: Cohort): Promise<Cohort> {
    return await this.cohortRepository.save(cohort);
  }

  async update(cohort: Cohort): Promise<UpdateResult> {
    return await this.cohortRepository.update(cohort.id, cohort);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.cohortRepository.delete(id);
  }
}

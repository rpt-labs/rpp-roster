import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>
  ) {}
  async findAll(): Promise<Student[]> {
    return await this.studentRepository.find();
  }

  async create(student: Student): Promise<Student> {
    return await this.studentRepository.save(student);
  }

  async update(student: Student): Promise<UpdateResult> {
    return await this.studentRepository.update(student.id, student);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.studentRepository.delete(id);
  }
}

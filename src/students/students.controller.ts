import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Student } from './student.entity';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Get()
  index(): Promise<Student[]> {
    return this.studentsService.findAll();
  }

  @Post('create')
  async create(@Body() studentData: Student): Promise<any> {
    return this.studentsService.create(studentData);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() studentData: Student): Promise<any> {
    studentData.id = Number(id);
    // console.log('Update #' + cohortData.id);
    return this.studentsService.update(studentData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.studentsService.delete(id);
  }
}

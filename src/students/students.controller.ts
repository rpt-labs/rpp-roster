import { Controller, Get } from '@nestjs/common';

@Controller('students')
export class StudentsController {
  @Get()
  index(): string {
    return 'This action will return students';
  }
}

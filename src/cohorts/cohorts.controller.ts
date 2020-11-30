import { Controller, Get } from '@nestjs/common';
import { Cohort } from './cohort.entity';
import { CohortsService } from './cohorts.service';

@Controller('cohorts')
export class CohortsController {
  constructor(private contactsService: CohortsService) {}

  @Get()
  index(): Promise<Cohort[]> {
    return this.contactsService.findAll();
  }
}

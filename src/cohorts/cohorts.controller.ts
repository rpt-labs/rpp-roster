import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Cohort } from './cohort.entity';
import { CohortsService } from './cohorts.service';

@Controller('cohorts')
export class CohortsController {
  constructor(private cohortsService: CohortsService) { }

  @Get()
  index(): Promise<Cohort[]> {
    return this.cohortsService.findAll();
  }

  @Post('create')
  async create(@Body() cohortData: Cohort): Promise<any> {
    return this.cohortsService.create(cohortData);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() cohortData: Cohort): Promise<any> {
    cohortData.id = Number(id);
    console.log('Update #' + cohortData.id)
    return this.cohortsService.update(cohortData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.cohortsService.delete(id);
  }
}

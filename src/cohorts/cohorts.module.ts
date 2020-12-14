import { Module } from '@nestjs/common';
import { CohortsService } from './cohorts.service';
import { CohortsController } from './cohorts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cohort } from './cohort.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cohort])],
  providers: [CohortsService],
  controllers: [CohortsController]
})
export class CohortsModule {}

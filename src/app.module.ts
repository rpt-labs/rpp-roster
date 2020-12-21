import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CohortsModule } from './cohorts/cohorts.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [
    CohortsModule,
    StudentsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'rpt-roster',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

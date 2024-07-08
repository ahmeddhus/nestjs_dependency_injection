import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService], // Things that cn be used as dependencies for other classes
  exports: [PowerService], // Things that can be accessed outside Modules
})
export class PowerModule {}

import { Module } from '@nestjs/common';
import { SeekerController } from './seeker.controller';

@Module({
  controllers: [SeekerController]
})
export class SeekerModule {}

import { Module } from '@nestjs/common';
import { EmitterController } from './emitter.controller';

@Module({
  controllers: [EmitterController]
})
export class EmitterModule {}

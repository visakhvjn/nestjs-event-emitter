import { Module } from '@nestjs/common';
import { ListenerController } from './listener.controller';

@Module({
  controllers: [ListenerController]
})
export class ListenerModule {}

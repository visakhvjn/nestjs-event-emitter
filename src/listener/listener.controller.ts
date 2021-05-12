import { Controller } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Controller('listener')
export class ListenerController {

    @OnEvent('hello')
    handleOrderCreatedEvent(message) 
    {
        console.log("I am expecting some messages now!");
        console.log(message);
    }
}

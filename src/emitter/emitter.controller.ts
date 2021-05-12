import { Controller, Get } from '@nestjs/common';
import { EventEmitter2 } from 'eventemitter2';

@Controller('emitter')
export class EmitterController {

    constructor(private readonly EventEmitter: EventEmitter2) {}

    @Get("emit")
    async emit()
    {
        const x = 5 + 2;
        
        console.log(x);

        this.EventEmitter.emit
        (
            'hello',
            "My name is Antony Gonzalves!"
        );  
    }

}

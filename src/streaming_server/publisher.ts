import {Stan} from 'node-nats-streaming';
import Subjects from './events/subjects';

interface Event {
    subject: Subjects;
    data: any;
}

const d =()=> {}
export abstract class Publisher <T extends Event> {
    abstract subject: T['subject'];
    constructor(private client: Stan) {}

    publish(data: T['data']): void {
        this.client.publish(this.subject, JSON.stringify(data), (err, guid) => {
            if (err) {
                console.error(`Error while publishing event: ${this.subject}`);
                return;
            }
            console.log(`Event published: ${this.subject} with guid: ${guid}`);
        });
    }
}
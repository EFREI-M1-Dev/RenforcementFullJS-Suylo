import { ExpressServer } from './express-server';

export class ExpressApplication {
    private server = new ExpressServer('3000')

    bootstrap() {
        this.server.bootstrap()
    }
}
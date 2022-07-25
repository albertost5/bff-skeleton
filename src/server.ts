import * as express from "express";
import * as http from "http";
import * as bodyParser from "body-parser";
import * as os from "os";
import * as dotenv from 'dotenv';
import AbstractController from "./api/abstracts/abstract.controller";
import ControllerRegistry from "./api/commons/registry.controller";
class Server {

    public app: express.Application;

    constructor(controllers: AbstractController[]) {
        this.app = express();

        // middlewares
        this.app.use(bodyParser.json());
        this.app.use(express.json());

        // controllres
        this.initializeControllers(controllers);
    }

    public listen(): http.Server {
        let port = process.env.PORT ? process.env.PORT : 3001;

        return this.app.listen(port, () => {
            console.log('BFF Layer started in host: ' + os.hostname + ' port: ' + port);
            console.log('The application is listening on port: ' + port);
        });
    }

    public initializeControllers(controllers: AbstractController[]) {
        console.log('Controllers size: ' + controllers.length);
        controllers.forEach((controller) => {
            this.app.use('/', controller.registerRoutes());
        });
    }

}

export default Server;

const server = new Server(ControllerRegistry.registry);
server.listen();
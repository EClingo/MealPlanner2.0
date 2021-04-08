import * as bodyParser from "body-parser";
import * as express from "express";
import Logger from "./logger/logger";
import Routes from "./routes/routes";

class App {
    public express: express.Application;
    //public logger: Logger;

    //array to hold users
    public users: any[];

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.users = [];
      //  this.logger = new Logger();
    }

    //configure express middleware
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        this.express.get("/", (req, res, next) => {
            res.send("Typescript App Works!!");
        });

        //user route
        this.express.use("/api", Routes);

        //handlel undefined routes
        this.express.use("*", (req, res, next) => {
            res.send("Make sure URL is correct!!");
        });
    }
}

export default new App().express;
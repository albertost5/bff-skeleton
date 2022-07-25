import * as express from "express";
import { Response } from "../../utils/response.util";

abstract class AbstractController {

    public abstract registerRoutes(): express.Router;

    protected sendResponse(req: express.Request, res: express.Response, controllerResponse: Response, date: number) {

        res.contentType(controllerResponse.contentType);
        res.status(controllerResponse.status || 200).send(controllerResponse.data);
        
    }

}

export default AbstractController;
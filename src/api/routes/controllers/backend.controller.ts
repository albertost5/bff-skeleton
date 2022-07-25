import AbstractController from "../../abstracts/abstract.controller";
import * as express from "express";
import * as ResponseUtil from '../../../utils/response.util';


class BackendControllerExample extends AbstractController {

    private router = express.Router();

    public registerRoutes(): express.Router {

        this.router.get('/backendControllerExample', this.execute);

        return this.router;
    }

    private execute = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const startDate = new Date().getTime();
        const backendResponse = ResponseUtil.getBaseResponse();

        backendResponse.contentType = 'application/json';
        backendResponse.data = {
            hello: 'helloWorld!'
        }
        backendResponse.status = 200;

        return this.sendResponse(req, res, backendResponse, startDate)
    }

}

export default BackendControllerExample;
import AbstractController from "../../abstracts/abstract.controller";
import * as express from "express";
import * as ResponseUtil from '../../../utils/response.util';
import BackendProvider from "../providers/backend.provider";
import * as ErrorUtil from '../../../utils/error.util';
import backendService from "../services/backend.service";


class BackendControllerExample extends AbstractController {

    private router = express.Router();

    public registerRoutes(): express.Router {

        this.router.get('/backendControllerExample', this.execute);

        return this.router;
    }

    private execute = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const startDate = new Date().getTime();
        const bffResponse = ResponseUtil.getBaseResponse();

        bffResponse.contentType = 'application/json';

        const backendProvider = new BackendProvider();

        try {
            const backendResponse = await backendProvider.backendUsingGET();
            console.log('controllerResponse => ', backendResponse.data);

            return this.sendResponse(req, res, backendService.backendResponse(backendResponse.data), startDate);
        } catch (error) {
            bffResponse.status = 500;
            bffResponse.data = ErrorUtil.errorResponse('50000', 'INTERNAL_SERVER_ERROR', 'Error occurred while processing the endpoint /backendControllerExample');

            return this.sendResponse(req, res, bffResponse, startDate);
        }
    }
}

export default BackendControllerExample;
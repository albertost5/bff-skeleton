import { getBaseResponse } from '../../../utils/response.util';

function backendResponse( backendRes: any ) {
    const baseResponse = getBaseResponse();
    baseResponse.contentType = 'application/json';
    baseResponse.data = {}

    const { name, age } = backendRes;

    baseResponse.data.name = name;
    baseResponse.data.age = age;

    return baseResponse;
}

export default { backendResponse };
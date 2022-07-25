export interface Response {

    status: number; // Server response code
    data: any;
    contentType: string;

}

export function getBaseResponse(): Response {

    const serviceResponse: Response = {
        status: 200,
        data: {},
        contentType: ''
    };

    return serviceResponse;
}

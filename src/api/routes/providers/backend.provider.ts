import axios, { AxiosResponse } from "axios";

class BackendProvider {

    public backendUsingGET(): Promise<AxiosResponse<any, any>> {

        const apiResponse = axios.get('https://api.agify.io/?name=alberto')
        return apiResponse;
    
    }
}

export default BackendProvider;
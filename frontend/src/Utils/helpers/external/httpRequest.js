import baseApi from '../../../Api/baseApi'

class HttpClient {
    static async post(endpointUrl, dataPayload, headerOptions) {
        const {
            status,
            data
        }= await baseApi.post(endpointUrl, dataPayload, headerOptions)
        return {status, data: data.data}
    }
}

export default HttpClient
  


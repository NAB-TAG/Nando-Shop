
import { ApisConstant } from "@/utils/constants/ApisConstants";
import axios from "axios";
// cf: Milanesa89y310893y491873418092347
export namespace AxiosData {
    export const Default = async (path:string) => {
        const API_LARAVEL = ApisConstant.backendLaravel;

        const url = API_LARAVEL + path;

        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            withCredentials: true,
        });
        
        return response;
    }
    export const Post = async ( path:string, data:any ) => {
        const API_LARAVEL = ApisConstant.backendLaravel;

        const url = API_LARAVEL + path;

        await axios.post(url, data)
        .catch(function(error){
            return error;
        })

    }
    export const PostResponse = async ( path:string, data:any, handle:any ) => {
        const API_LARAVEL = ApisConstant.backendLaravel;

        const url = API_LARAVEL + path;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
              'X-XSRF-Token': `${localStorage.getItem('csrf_token')}`
            },
            credentials:'include'
          })
          .then(response => {
              return response.json();
          })
          .then(dataResponse => {
              handle(dataResponse)
          })
    }
}
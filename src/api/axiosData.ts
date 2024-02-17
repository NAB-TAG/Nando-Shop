
import { ApisConstant } from "@/utils/constants/ApisConstants";
import axios from "axios";

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
}
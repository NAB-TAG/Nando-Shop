'use client'
import { PathsApi } from "@/api/PathsApi";
import { AxiosData } from "@/api/axiosData";
import { useAsync } from "@/utils/hooks/useAsync";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";


const ButtonGoogle = () => {
    const [loginUrl, setLoginUrl] = useState<string>();

    const data = () => AxiosData.Default(PathsApi.api_auth);

    const successFunction = (data:{ url:string }) => {
        setLoginUrl(data.url)
    }

    const returnFunction = () => {}

    useAsync(data,successFunction,returnFunction)

    return (   
        <a href={ loginUrl } target="_BLANK" className="btn flex bg-base-100 hover:bg-base-200 hover:border-black">
            <FcGoogle className="text-2xl"/>
            <span className="ml-5 text-md">
                {loginUrl ? 
                    "Crear tu cuenta usando Google."
                :
                    "Espera un segundo."
                }
            </span>
        </a>
    );
}

export default ButtonGoogle
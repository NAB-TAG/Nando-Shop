'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import useSWR from 'swr'

const ButtonGoogle = () => {
    const [loginUrl, setLoginUrl] = useState();
    useEffect(()=>{
        
        const url = process.env.NEXT_PUBLIC_API + '/api/auth';
        const fetchData = async () => {
            try {
                const response = await axios.get(url, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    withCredentials: true
                });

                if (!response.data) {
                    throw new Error('La solicitud falló');
                }

                const data = response.data;
                setLoginUrl( data.url )
            } catch (error) {
                
            }
        }
        fetchData();
        // fetch(url, {
        //     headers : {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     credentials: 'include',
        //     next: {revalidate:3600},
        //     method: 'GET'
        // })
        //     .then((response) => {
        //         if (response.ok) {
        //             return response.json();
        //         }
        //         throw new Error('Something went wrong!');
        //     })
        //     .then((data) => {
        //         setLoginUrl( data.url );
        //     })
        //     .catch((error) => console.error(error));
    },[])

    return (
        <>
        {
            loginUrl ?        
            <a href={ loginUrl } target="_BLANK" className="btn flex bg-base-100 hover:bg-base-200 hover:border-black">
                <FcGoogle className="text-2xl"/>
                {/* <FaGoogle className="text-xl"/> */}
                <span className="ml-5 text-md">Crear tu cuenta usando Google</span>
            </a>
            :
            <a href={ loginUrl } target="_BLANK" className="btn flex bg-base-100 hover:bg-base-200 hover:border-black">
                <FcGoogle className="text-2xl"/>
                {/* <FaGoogle className="text-xl"/> */}
                <span className="ml-5 text-md">Espera un segundo</span>
            </a>
        }
        </>
    );
}

export default ButtonGoogle
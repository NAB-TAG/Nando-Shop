'use client'
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";

const ButtonGoogle = () => {
    const [loginUrl, setLoginUrl] = useState();
    useEffect(()=>{
        fetch(`${process.env.NEXT_PUBLIC_API}/api/auth`, {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something went wrong!');
            })
            .then((data) => {
                setLoginUrl( data.url );
            })
            .catch((error) => console.error(error));
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
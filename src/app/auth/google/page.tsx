'use client'
// import { useSearchParams } from "next/navigation";
// import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import { useLocation, useSearchParams } from 'react-router-dom';

const Google = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<{message:string}>({message:""});
    const [count, setCount] = useState(1);
    // const router = useSearchParams();
    // console.log(router.getAll(,))
    
    
    useEffect(() => {
        const location = window.location.search;
        const fetchData = async () => {
            

            fetch(`https://nando-shop-api.vercel.app/api/api/auth/callback${location && location}`, {
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                credentials: 'include',
                next: {revalidate:3600}
            })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setLoading(false);
                setData(data);
                window.location.href = '/';
                
            });
        }
        
        fetchData();
        // console.log("fetch")
    }, []); // Sin dependencias, se ejecuta solo una vez al montar el componente
    

    return (
        <div className="container text-center">
            <h1 className="text-center mb-5">Espera mientras estamos validando tus datos, seras redireccionado en unos segundos</h1>
            <h2 className="text-center ">{data.message}</h2>
        </div>
    )
    
}

export default Google;
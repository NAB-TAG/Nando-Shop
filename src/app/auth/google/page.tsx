'use client'
import axios from 'axios'
import { useEffect, useState } from "react";

const Google = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<{message:string,csrf_token:string, auth_token:string}>({message:"",csrf_token:"",auth_token:""});
    const [count, setCount] = useState(1);
    // const router = useSearchParams();
    // console.log(router.getAll(,))
    
    
    useEffect(() => {
        const location = window.location;
        const fetchData = async () => {
            try {
                const url = `${process.env.NEXT_PUBLIC_API}/api/auth/callback${location && location.search}`
                
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
                
                localStorage.setItem('auth_token', data.auth_token);

                setLoading(false);
                setData(data);
                // document.location.href = '/';
            } catch (error) {
                console.error('Error:', error);
            }
        };
        
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
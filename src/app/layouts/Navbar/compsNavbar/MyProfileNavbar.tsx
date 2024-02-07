'use client'
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


const MyProfileNavbar = () => {
    
    
    const token = Cookies.get('auth_token')
    console.log(token)
    console.log(document.cookie)
    // console.log(token)
    const [data,setData] = useState<{name:string}|null>(null) 
    const fetchData = async () => {
        try {
            const response = await fetch(`https://nando-shop-api.vercel.app/api/api/user`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                credentials: 'include',
                next: { revalidate: 3600 }
            });
    
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }
    
            const responseData = await response.json();
            setData(responseData);
        } catch (error) {
            console.error(error);
            // Manejar el error según sea necesario
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    // console.log("fetch")

  return (
    <div className="dropdown dropdown-end z-40">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
                <Image alt="Tailwind CSS Navbar component" src="/assets/images/avatars/user1.jpg" width='100' height="100"/>
            </div>
        </div>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <span className="w-full text-center my-3">{ data && data.name }</span>
            <li>
            <a className="justify-between">
                Ver mi Perfil
                <span className="badge">New</span>
            </a>
            </li>
            <li><a>Configuracion</a></li>
            <li><Link href={ '/auth/register' }>Registrarse</Link></li>
        </ul>
    </div>
  )
}
export default MyProfileNavbar;
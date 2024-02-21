'use client'
import { UserAdapter } from '@/adapters/UserAdapter';
import { useAsync } from '@/utils/hooks/useAsync';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'


const MyProfileNavbar = () => {
    const [data,setData] = useState<{name: string, email: string }|null>(null) 
    
    const fetchData = async () => {
        const token = localStorage.getItem('auth_token');
        const url = process.env.NEXT_PUBLIC_API + '/api/auth/user';

        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer '+ token
            },
            withCredentials: true,
        });
        
        return response;
    }

    const handleSuccess = (responseData: {name: string, email: string }) => {
        setData(UserAdapter.get(responseData));
    }

    const handleReturn = () => {
        // Lógica para realizar acciones de limpieza o desmontaje (opcional)
    };

    useAsync(fetchData , handleSuccess, handleReturn);

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
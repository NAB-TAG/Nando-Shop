'use client'

import { useEffect, useState } from "react"


const Ninjas = ({ ninjas }: {ninjas:{name:string, id:number}[]}) => {
    const [ ninjasdata, setNinjasdata ] = useState<{name:string, id:number}[]|null>(null)
    
    const getFetch = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users',{
                method:"GET"
            })

            if(response){
                const data = await response.json()
                console.log(data)
                setNinjasdata(data)
            }
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        getFetch()
    },[])
    return (
        <>
            <h1>All Ninjas</h1>
            { ninjasdata && ninjasdata.map(item => (
                <div key={item.id}>{ item.name}</div>
            )) }
        </>
    )
}
export default Ninjas
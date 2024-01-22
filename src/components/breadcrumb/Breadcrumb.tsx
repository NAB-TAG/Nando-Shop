import Link from "next/link";
import React from "react";

interface BreadcrumbProps {
    links: { href: string, name: string }[];
}
const Breadcrumb:React.FC<BreadcrumbProps> = ({links}) => {
    return (
        <div className="">
            <div className="text-sm breadcrumbs">
                <ul>
                    { links.map((link, index) => {
                        // Si es el ultimo array
                        if(index === links.length - 1){
                            return (
                                <li key={ index }>
                                    {link.name}
                                </li> 
                            )
                        }
                        return (
                            <li key={ index }>
                                <Link href={link.href}>{link.name}</Link>
                            </li> 
                            )   
                    }) }
                </ul>
            </div>
        </div>
    )
}

export default Breadcrumb;
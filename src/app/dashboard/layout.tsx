import React from "react"

type LayoutProps = {
    children: React.ReactNode;
    folder1: React.ReactNode;
    folder2: React.ReactNode;
}
export default function RootLayout({ children,folder1, folder2 }: LayoutProps) { 
    return ( 

        <>
        <div>{folder1}</div>
        <div>{folder2}</div>
        <div>{children}</div> 
        </>
    ) 
}
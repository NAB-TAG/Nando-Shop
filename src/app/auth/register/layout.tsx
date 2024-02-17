import React, { Suspense } from "react"
import Loading from "./loading"

export default function RegisterLayout({
    children,
  }: {
    children: React.ReactNode,
  }) {
    return (
      <div className="flex justify-center mb-10 mx-auto">  
        <div className="hero-content flex-col lg:flex-row-reverse w-full lg:w-7/12">
          <Suspense fallback={ <Loading /> }>
              {children}
          </Suspense>
        </div>
      </div>
    )
  }
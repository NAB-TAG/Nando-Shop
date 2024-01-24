import { Suspense } from "react"
import Loading from "./loading"

const Dashboard = () => {
    return(
        <Suspense fallback={<Loading />}>

            {/* <h1>Estas en el dashboard</h1> */}
        </Suspense>
    )
}

export default Dashboard
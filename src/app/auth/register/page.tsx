"use client"
import ButtonGoogle from "./components/ButtonGoogle"
import FormFormik from "@/components/form/FormFormik"
import ValidationSchema from "./components/ValidationSchema"
import { Fields, initialValues } from "./constants/data"


const Register = () => {
    return(
        <div className="container flex justify-center mb-10 mx-auto">  
            <div className="hero-content flex-col lg:flex-row-reverse w-full lg:w-9/12">
                <Header />
                <Form />
            </div>
        </div>
    )
}

const Header = () => (
    <div className="text-center lg:text-left w-full md:w-1/2">
        <h1 className="text-2xl font-bold">Crea tu cuenta!</h1>
        <p className="py-6">Ya tienes una cuenta de google? </p>
        <div className="mt-10 flex flex-col justify-center">
            <ButtonGoogle />
        </div>
    </div>
)



const Form:React.FC = () => {
    
    function handleSubmit(values?: any) {
        console.log(values)
    }

    return (
        <div className="card shrink-0 shadow-2xl bg-base-100 w-full md:w-1/2">
            {FormFormik(Fields ,initialValues, handleSubmit, ValidationSchema)}
        </div>
    )
}


export default Register
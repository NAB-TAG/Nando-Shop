"use client"
import FormFormik from "@/components/form/FormFormik"
import ValidationSchema from "./components/ValidationSchema"
import { Fields, initialValues } from "./constants/data"
import Header from "./components/Header"

// Componente Principal
const Register = () => {
    return(
        <>
            <Header />
            <Form />
        </>
    )
}

// Renderizado del formulario y su logica de manejo
const Form:React.FC = () => {
    
    function handleSubmit(values?: any) {
        console.log(values)
    }

    return (
        <div className="card shrink-0 shadow-2xl bg-base-100 w-full md:w-1/2">
            {FormFormik(Fields ,initialValues, handleSubmit, ValidationSchema, "Crear Cuenta")}
        </div>
    )
}


export default Register
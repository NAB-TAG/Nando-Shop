import FormFormik from "@/components/form/FormFormik";
import { Fields, initialValues } from "../constants/data";
import ValidationSchema from "./ValidationSchema";
import { AxiosData } from "@/api/axiosData";
import { PathsApi } from "@/api/PathsApi";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form:React.FC = () => {
    
    function handleSubmit(values?: any) {
        // Muestra la notificacion mientras se esta cargando
        const notify = toast.loading("Espera un segundo...", { position: "bottom-right" })
        
        // Una peticion axios que maneja la respuesta
        AxiosData.PostResponse(PathsApi.api_signin,values,(response:any)=>{
            // Muestra la notificacion con la respuesta
            toast.update(notify, { 
                render: response[2], 
                type: response[0], 
                isLoading: false, 
                autoClose: 10000,
                closeButton:true,
                draggable: true
            });

        })
    }

    return (
        <div className="card shrink-0 shadow-2xl bg-base-100 w-full md:w-1/2">
            {FormFormik(Fields, initialValues, handleSubmit, ValidationSchema, "Crear Cuenta")}
            <ToastContainer 
                toastClassName="[@supports(color:oklch(0_0_0))]:!bg-base-100" 
                bodyClassName="[@supports(color:oklch(0_0_0))]:text-primary" 
                draggable
                theme="light"
                stacked
                position="bottom-right"
                closeButton={false}
                transition={Slide}
            />
        </div>
    )
}

export default Form;
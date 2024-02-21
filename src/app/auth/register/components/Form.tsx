import FormFormik from "@/components/form/FormFormik";
import { Fields, initialValues } from "../constants/data";
import ValidationSchema from "./ValidationSchema";
import { AxiosData } from "@/api/axiosData";
import { PathsApi } from "@/api/PathsApi";
import { MessageToastify } from "@/utils/helpers/MessageToastify";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useAsync } from "@/utils/hooks/useAsync";
import { ApisConstant } from "@/utils/constants/ApisConstants";
const Form:React.FC = () => {
    
    function handleSubmit(values?: any) {
        // const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
        // const data:any = AxiosData.Post(PathsApi.api_signin,values);
        const notify = toast.loading("Espera un segundo...", { position: "bottom-right" })
        const url = ApisConstant.backendLaravel + PathsApi.api_signin;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
              'Content-Type': 'application/json' // Especifica que el cuerpo es JSON
            },
          })
          .then(response => {
              return response.json();
          })
          .then(data => {
              toast.update(notify, { render: data[2], type: data[0], isLoading: false, autoClose:3000,position: "bottom-right" });
          })
          
      
        
        
        
        // toast.promise(
        //     resolveAfter3Sec,
        //     {
        //         pending: 'Creando una cuenta',
        //         success: 'Creacion de cuenta exitosa 👌',
        //         error: 'Promise rejected 🤯'
        //     }
        // )
    }

    return (
        <div className="card shrink-0 shadow-2xl bg-base-100 w-full md:w-1/2">
            {FormFormik(Fields, initialValues, handleSubmit, ValidationSchema, "Crear Cuenta")}
            <ToastContainer />
        </div>
    )
}

export default Form;
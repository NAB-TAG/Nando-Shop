import FormFormik from "@/components/form/FormFormik";
import { Fields, initialValues } from "../constants/data";
import ValidationSchema from "./ValidationSchema";
import { AxiosData } from "@/api/axiosData";
import { PathsApi } from "@/api/PathsApi";

const Form:React.FC = () => {
    
    function handleSubmit(values?: any) {
        AxiosData.Post(PathsApi.api_signin, values);
    }

    return (
        <div className="card shrink-0 shadow-2xl bg-base-100 w-full md:w-1/2">
            {FormFormik(Fields, initialValues, handleSubmit, ValidationSchema, "Crear Cuenta")}
        </div>
    )
}

export default Form;
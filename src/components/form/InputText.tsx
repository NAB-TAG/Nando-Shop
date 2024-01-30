import { Field } from "formik"

interface Nameable { name: string }

interface Placeholderable { placeholder?: string }

interface Classeable { classname?: string }

const InputText:React.FC<Nameable & Placeholderable & Classeable> = ({ name, placeholder = '', classname = ''}) => {
    return (
        <Field name={ name } className={`input input-bordered join-item ${classname}`} placeholder={ placeholder }/>
    )
}

export default InputText
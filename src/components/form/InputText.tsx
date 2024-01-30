import { Field } from "formik"

interface Nameable { name: string }

interface Placeholderable { placeholder?: string }

const InputText:React.FC<Nameable & Placeholderable> = ({ name, placeholder = ''}) => {
    return (
        <Field name={ name } className="input input-bordered join-item" placeholder={ placeholder }/>
    )
}

export default InputText
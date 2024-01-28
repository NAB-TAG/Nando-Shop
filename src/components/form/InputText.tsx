interface Nameable { name: string }

interface Placeholderable { placeholder?: string }

const InputText:React.FC<Nameable & Placeholderable> = ({ name, placeholder = ''}) => {
    return (
        <input name={ name } className="input input-bordered join-item" placeholder={ placeholder }/>
    )
}

export default InputText
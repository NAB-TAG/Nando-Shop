import React from "react";

interface InputProps{
    title: string;
    type: string;
    placeholder: string;
    name: string;
    className?: string;
}

const InputGroupAuth: React.FC<InputProps> = ({ title, type, placeholder, name, className }) => {
    return(
        <div className={ `form-control ${ className }` }>
            <label className="label">
                <span className="label-text">{ title }</span>
            </label>
            <input type={ type } placeholder={ placeholder } className="input input-bordered flex w-full" required name={ name } />
        </div>
        
    )
}

export default InputGroupAuth
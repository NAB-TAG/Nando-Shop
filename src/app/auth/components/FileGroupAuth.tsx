import React from "react";

interface InputProps{
    name: string;
    title: string;
}

const FileGroupAuth: React.FC<InputProps> = ({ name, title }) => {
    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text">{ title }</span>
            </label>
            <input type="file" name={ name } className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
        </div>
    )
}

export default FileGroupAuth
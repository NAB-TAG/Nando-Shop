import React from "react";
import { Field, Form, Formik } from "formik";
import InputText from "./InputText";
import SelectForm from "./SelectForm";

export namespace GroupForm {
    interface searchable {
        nameInput: string;
    }
    interface filterable {
        nameSelect: string;
        filterSelect: { id: number, name: string }[];
    }
    interface initialable {
        initialValues: {}
    }
    interface handleSubmitable {
        handleSubmit: (values: {}) => any
    }
    interface SearchProps extends searchable, filterable, initialable, handleSubmitable {}

    export const searchFilter:React.FC<SearchProps> = 
    ({ nameInput, filterSelect, initialValues, nameSelect, handleSubmit }) => {
       
        return (
            <Formik initialValues={ initialValues } onSubmit={ handleSubmit }>
                <Form>
                    <div className="join my-5 w-full">
                        <div className="w-full">   
                            <InputText name={ nameInput } placeholder="Buscar..." classname="w-full"/>
                        </div>

                        <SelectForm name={ nameSelect } items={ filterSelect } />
                        
                        <div className="indicator"> 
                            <button className="btn join-item btn-primary" type="submit">Buscar</button>
                        </div>
                    </div>
                </Form>
            </Formik>
        )
    }

}
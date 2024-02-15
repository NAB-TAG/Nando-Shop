import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import InputText from "./InputText";
import SelectForm from "./SelectForm";
import { FormInterface } from "./FormInterface";

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

    export const InputLabel:React.FC<FormInterface.PropsInputLabel> = ({field}) => (
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">{ field.label }</span>
          </div>
              
          <Field name={field.name} type={ field.type } placeholder={ field.placeholder } className="input input-bordered w-full"/>
              
      
            {/* Mostrar mensaje de error */}
          <div className="label">
            <ErrorMessage name={ field.name } className="label-text-alt">
              { msg => <span className="label-text-alt text-red-600">{ msg }</span> }
            </ErrorMessage>
          </div>
        </label>
      )

}
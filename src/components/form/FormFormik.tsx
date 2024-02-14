'use client'
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

const FormFormik = ( 
  Fields: { id:number, type:string, name:string, placeholder?:string, label?:string }[],
  initialValues: any, 
  handleSubmit: (values: any)=>void,
  validation: any,
) => {

  const submit = (values: any) => {
    handleSubmit(values)
  }
return (
    <>
      <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        submit(values)
      }}
      validationSchema={validation}
    >
      
        <Form className="card-body flex gap-0">
          { Fields.map((field, index) => (
            <FormControl field={field} key={index}/>
          )) }
          
          <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Crear cuenta</button>
          </div>
        </Form>
      
    </Formik>
    </>
  );
};


const FormControl = ({field}:{field:{ id:number, type:string, name:string, placeholder?:string, label?:string }}) => (
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

export default FormFormik;

'use client'
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import React from "react";
import { GroupForm } from "./GroupsForm";

/**
 * Renderiza un formulario hecho con formik y Yup 
 * @param Fields Los datos para que este los convierta automaticamente en un input
 * @param initialValues Valor inicial del Formulario
 * @param handleSubmit Metodo que maneja los datos enviados
 * @param validation Validacion con yup
 * @param buttonText Texto del Boton
 * @returns 
 */
const FormFormik = ( 
  Fields: { id:number, type:string, name:string, placeholder?:string, label?:string }[],
  initialValues: {}={}, 
  handleSubmit: (values: {})=>void,
  validation: Yup.AnyObjectSchema,
  buttonText: string
) => {

  const submit = (values: any) => {
    handleSubmit(values)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        submit(values)
      }}
      validationSchema={ validation }
    >
      
      <Form className="card-body flex gap-0">
        { Fields.map((field, index) => (
          <GroupForm.InputLabel field={field} key={index}/>
        )) }
          <Field name="_token" value={localStorage.getItem("csrf_token")}/>
        <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">{ buttonText }</button>
        </div>
      </Form>
        
    </Formik>
      
  );
};

export default FormFormik;

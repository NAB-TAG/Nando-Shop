'use client'
import { Formik } from "formik";

const FormDefault = () => {
    return (
      <div>
        <h1>Signup</h1>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
          }}
          onSubmit={() => {}}
        >
          
        </Formik>
      </div>
    );
  };


export default FormDefault;

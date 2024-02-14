import * as Yup from 'yup';
const ValidationSchema = Yup.object().shape({
    email: Yup.string().email('Email Invalido').required('El email es requerido'),
    password: Yup.string()
        .min(8,'La contraseña debe tener minimo 8 caracteres')
        .required("La contraseña es requerida")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$"#()=!%*?&])[A-Za-z\d@$"#()=!%*?&]+$/,"La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial"),
    cpassword: Yup.string()
        .required('Debes confirmar tu contraseña')
        .oneOf([Yup.ref('password')], "Las contraseñas no coinciden")
});

export default ValidationSchema;
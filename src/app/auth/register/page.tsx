import Link from "next/link"
import InputGroupAuth from "../components/InputGroupAuth"
import ButtonGoogle from "./components/ButtonGoogle"

const Register = () => {
    return(
        <div className="container flex justify-center mb-10 mx-auto">
            
                <div className="hero-content flex-col lg:flex-row-reverse w-full lg:w-9/12">
                    <div className="text-center lg:text-left w-full md:w-1/2">
                        <h1 className="text-2xl font-bold">Crea tu cuenta!</h1>
                        <p className="py-6">Ya tienes una cuenta de google? </p>
                        <div className="mt-10 flex flex-col justify-center">
                            <ButtonGoogle />
                        </div>
                    </div>
                    <div className="card shrink-0 shadow-2xl bg-base-100 w-full md:w-1/2">
                        <form className="card-body flex gap-0">
                            

                            <InputGroupAuth name="email" type="email" placeholder="Escribe tu Correo Electronico" title="Correo Electronico" className="w-full mb-5"/>

                            <InputGroupAuth name="password" type="password" placeholder="Escribe tu Contraseña" title="Contraseña" className="w-full mb-2"/>
                            
                            <InputGroupAuth name="cpassword" type="password" placeholder="Escribe de vuelta la contraseña" title="Validar Contraseña" className="w-full"/>

                            <div className="form-control border-[20px] border-base-100">
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover disabled">Olvidaste tu contraseña?</a>
                                </label>
                                <label className="label">
                                    <Link href="/auth/login" className="label-text-alt link link-hover">Ya tienes una cuenta?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Crear cuenta</button>
                            </div>
                        </form>
                    </div>
                </div>
            
        </div>
    )
}

export default Register
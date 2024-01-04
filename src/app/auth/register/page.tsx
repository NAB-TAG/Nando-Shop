import FileGroupAuth from "../components/FileGroupAuth"
import InputGroupAuth from "../components/InputGroupAuth"

const Register = () => {
    return(
        <div className="container mx-auto mb-10">
            
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl font-bold">Inicia Sesion!</h1>
                        <p className="py-6">Descripcion</p>
                    </div>
                    <div className="card shrink-0 w-full max-[390px]:w-full shadow-2xl bg-base-100">
                        <form className="card-body flex gap-0">
                            
                            <InputGroupAuth name="user" type="text" placeholder="Escribe tu nombre de usuario" title="Usuario (Requerido)" className="w-1/2"/>

                            <InputGroupAuth name="email" type="email" placeholder="Escribe tu correo" title="Email (Requerido)" className="w-1/2"/>
                            
                            {/* <FileGroupAuth name="avatar" title="Avatar (Opcional)"/> */}

                            <InputGroupAuth name="password" type="password" placeholder="Escribe tu Contraseña" title="Contraseña (Requerido)" className="w-1/2"/>

                            <InputGroupAuth e="cpassword" type="password" placeholder="Confirma tu Contraseña" title="Confirma tu contraseña (Requerido)" className="w-1/2"/>

                            <div className="form-control border-[20px] border-base-100">
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Olvidaste tu contraseña?</a>
                                </label>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Ya tienes una cuenta?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Registrarte</button>
                            </div>
                        </form>
                    </div>
                </div>
            
        </div>
    )
}

export default Register
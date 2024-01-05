const Login = () => {
    return(
        <div className="container mx-auto mb-10">
            
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl font-bold">Inicia Sesion!</h1>
                        <p className="py-6">Descripcion</p>
                    </div>
                    <div className="card shrink-0 w-full max-[390px]:w-full sm:w-72 xl:w-96 shadow-2xl bg-base-100">
                        <form className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Escribe tu Correo" className="input input-bordered flex w-full" required name="email"/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Contraseña</span>
                                </label>
                                <input type="password" placeholder="Escribe tu contraseña" className="input input-bordered flex w-full" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Olvidaste tu contraseña?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Iniciar Sesion</button>
                            </div>
                        </form>
                    </div>
                </div>
            
        </div>
    )
}

export default Login
import ButtonGoogle from "./ButtonGoogle";

const Header = () => (
    <div className="text-center lg:text-left w-full md:w-1/2">
        <h1 className="text-2xl font-bold">Crea tu cuenta!</h1>
        <p className="py-6">Ya tienes una cuenta de google? </p>
        <div className="mt-10 flex flex-col justify-center">
            <ButtonGoogle />
        </div>
    </div>
)

export default Header;
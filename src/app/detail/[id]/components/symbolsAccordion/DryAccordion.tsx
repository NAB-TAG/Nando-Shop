import { TbWashDry1, TbWashDry2, TbWashDry3, TbWashDryDip, TbWashDryFlat, TbWashDryHang, TbWashDryOff, TbWashDryShade, TbWashTumbleDry } from "react-icons/tb";

const DryAccordion = () => {
    return (
        <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-branch" /> 
            <div className="collapse-title text-xl font-medium">
                Secado
            </div>
            <div className="collapse-content flex gap-2 flex-wrap">
                <button className="btn h-auto w-full mb-3 flex-col">
                    <TbWashDry1 className="text-4xl"/>
                    <span>Secadora a baja temperatura</span>
                </button>
                
                <button className="btn h-auto w-full mb-3 flex-col">
                    <TbWashDry2 className="text-4xl"/>
                    <span>Secadora a media temperatura</span>
                </button>
                
                <button className="btn h-auto w-full mb-3 flex-col">
                    <TbWashDry3 className="text-4xl"/>
                    <span>Secadora a alta temperatura</span>
                </button>

                <button className="btn h-auto w-full mb-3 flex-col">
                    <TbWashDryOff className="text-4xl"/>
                    <span>No admite centrifugado</span>
                </button>

                <button className="btn h-auto w-full mb-3 flex-col">
                    <TbWashDryFlat className="text-4xl"/>
                    <span>Secar la prenda en horizontal en un tendedero</span>
                </button>

                <button className="btn h-auto w-full mb-3 flex-col">
                    <TbWashDryHang className="text-4xl"/>
                    <span>Secar la prenda colgada</span>
                </button>

                <button className="btn h-auto w-full mb-3 flex-col">
                    <TbWashDryDip className="text-4xl"/>
                    <span>Secar la ropa colgada en perchas</span>
                </button>

                <button className="btn h-auto w-full mb-3 flex-col">
                    <TbWashDryShade className="text-4xl"/>
                    <span>Secar a la sombra</span>
                </button>

                <button className="btn h-auto w-full mb-3 flex-col">
                    <TbWashTumbleDry className="text-4xl"/>
                    <span>Se puede secar en secadora</span>
                </button>
            </div>
        </div>
    )
}

export default DryAccordion
import { TbWashDryA, TbWashDryF, TbWashDryP, TbWashDryW, TbWashDryclean, TbWashDrycleanOff } from "react-icons/tb"


const ProfessionalAccordion = () => {
    return (
        <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-branch" /> 
            <div className="collapse-title text-xl font-medium">
                Lavado Profesional
            </div>
            <div className="collapse-content flex gap-2 flex-wrap">
                <button className="btn h-auto w-full mb-3 flex-col">
                    <TbWashDryclean className="text-4xl"/>
                    <span>Limpiarse en una tintoreria</span>
                </button>
                
                <button className="btn h-auto w-full mb-3 flex-col">
                    <TbWashDryA className="text-4xl"/>
                    <span>Limpieza en seco con cualquier disolvente</span>
                </button>
                
                <button className="btn h-auto w-full mb-3 flex-col">
                    <TbWashDryP className="text-4xl"/>
                    <span>Limpieza en seco con cualquier disolvente, salvo tricloroetileno</span>
                </button>

                <button className="btn h-auto w-full mb-3 flex-col">
                    <TbWashDryF className="text-4xl"/>
                    <span>Limpieza en seco con bencina u otros hidrocarburos</span>
                </button>

                <button className="btn h-auto w-full mb-3 flex-col">
                    <TbWashDryW className="text-4xl"/>
                    <span>Limpieza normal con agua</span>
                </button>

                <button className="btn h-auto w-full mb-3 flex-col">
                    <TbWashDrycleanOff className="text-4xl"/>
                    <span>No se puede lavar en seco</span>
                </button>

            </div>
        </div>
    )
}

export default ProfessionalAccordion
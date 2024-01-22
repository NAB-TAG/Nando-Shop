import { TbWash, TbWashGentle, TbWashHand, TbWashOff, TbWashPress, TbWashTemperature1, TbWashTemperature2, TbWashTemperature3, TbWashTemperature4, TbWashTemperature5, TbWashTemperature6 } from "react-icons/tb";

const WashAccordion = () => {
    return (
        <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-branch" /> 
            <div className="collapse-title text-xl font-medium">
                Lavado
            </div>
            <div className="collapse-content flex gap-2 flex-wrap">
                <button className="btn h-auto w-full mb-3 flex-col">
                    <TbWash className="text-4xl"/>
                    <span>Se puede lavar y mojar con agua</span>
                </button>
                
                <button className="btn h-auto w-full mb-3 flex-col">
                    <TbWashOff className="text-4xl"/>
                    <span>No se puede mojar ni lavar con agua</span>
                </button>
                
                <button className="btn h-auto w-full mb-3 flex-col">
                    <TbWashHand className="text-4xl"/>
                    <span>Se puede lavar con agua, pero a mano</span>
                </button>

                <button className="btn h-auto w-full mb-3 flex-col">
                    <TbWashHand className="text-4xl"/>
                    <span>Se puede lavar con agua, pero a mano</span>
                </button>
                
                <button className="btn h-auto w-full mb-3 flex-col">
                    <TbWashPress className="text-4xl"/>
                    <span>Se puede lavar en lavadora en un programa delicado</span>
                </button>
                
                <button className="btn h-auto w-full mb-3 flex-col">
                    <TbWashGentle className="text-4xl"/>
                    <span>Se puede lavar en lavadora en un programa muy delicado</span>
                </button> 
                
                <button className="btn h-auto w-full mb-3 flex-col">
                    <TbWashTemperature1 className="text-4xl"/>
                    <span>Se puede lavar a una temperatura máxima de 30 grados</span>
                </button>

                <button className="btn h-auto w-full mb-3 flex-col">
                    <TbWashTemperature2 className="text-4xl"/>
                    <span>Se puede lavar a una temperatura máxima de 40 grados</span>
                </button>

                <button className="btn h-auto w-full mb-3 flex-col">
                    <TbWashTemperature3 className="text-4xl"/>
                    <span>Se puede lavar a una temperatura máxima de 50 grados</span>
                </button>

                <button className="btn h-auto w-full mb-3 flex-col">
                    <TbWashTemperature4 className="text-4xl"/>
                    <span>Se puede lavar a una temperatura máxima de 60 grados</span>
                </button>

                <button className="btn h-auto w-full mb-3 flex-col">
                    <TbWashTemperature5 className="text-4xl"/>
                    <span>Se puede lavar a una temperatura máxima de 70 grados</span>
                </button>

                <button className="btn h-auto w-full mb-3 flex-col">
                    <TbWashTemperature6 className="text-4xl"/>
                    <span>Se puede lavar a una temperatura máxima de 95 grados</span>
                </button>
            </div>
        </div>
    )
}

export default WashAccordion
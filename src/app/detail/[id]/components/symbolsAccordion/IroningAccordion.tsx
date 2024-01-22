import { TbIroningSteamOff, TbIroning, TbIroning1, TbIroning2, TbIroning3, TbIroningOff, TbIroningSteam } from "react-icons/tb";

const IroningAccordion = () => {
    return (
        <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-branch" /> 
            <div className="collapse-title text-xl font-medium">
                Planchado
            </div>
            <div className="collapse-content flex gap-2 flex-wrap">
                <button className="btn">
                    <TbIroning className="text-4xl"/>
                    <span>Planchar Temperatura normal</span>
                </button>
                
                <button className="btn">
                    <TbIroning1 className="text-4xl"/>
                    <span>Planchar Temperatura Baja</span>
                </button>
                
                <button className="btn">
                    <TbIroning2 className="text-4xl"/>
                    <span>Planchar Temperatura Media</span>
                </button>

                <button className="btn">
                    <TbIroning3 className="text-4xl"/>
                    <span>Planchar Temperatura Maxima</span>
                </button>

                <button className="btn">
                    <TbIroningOff className="text-4xl"/>
                    <span>No Planchar</span>
                </button>

                <button className="btn">
                    <TbIroningSteam className="text-4xl"/>
                    <span>Planchar con Vapor</span>
                </button>

                <button className="btn">
                    <TbIroningSteamOff className="text-4xl"/>
                    <span>No Planchar con vapor</span>
                </button>

            </div>
        </div>
    )
}

export default IroningAccordion
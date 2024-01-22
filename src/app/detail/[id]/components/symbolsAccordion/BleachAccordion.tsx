import { TbBleach, TbBleachNoChlorine, TbBleachOff, TbWashDry1, TbWashDry2, TbWashDry3, TbWashDryDip, TbWashDryFlat, TbWashDryHang, TbWashDryOff, TbWashDryShade, TbWashTumbleDry } from "react-icons/tb";

const BleachAccordion = () => {
    return (
        <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-branch" /> 
            <div className="collapse-title text-xl font-medium">
                Blanqueador
            </div>
            <div className="collapse-content flex gap-2 flex-wrap">
                <button className="btn">
                    <TbBleach className="text-4xl"/>
                    <span>Se pueden usar blanqueadores clorados, incluida la lejía</span>
                </button>
                
                <button className="btn">
                    <TbBleachOff className="text-4xl"/>
                    <span>No se pueden usar blanqueadores clorados.</span>
                </button>
                
                <button className="btn">
                    <TbBleachNoChlorine className="text-4xl"/>
                    <span>Se pueden usar blanqueadores basados en oxígeno</span>
                </button>

                
            </div>
        </div>
    )
}

export default BleachAccordion
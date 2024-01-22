import { FaCcMastercard, FaCcPaypal, FaCcStripe, FaCcVisa } from "react-icons/fa6";
import { SiAmericanexpress, SiMercadopago } from "react-icons/si";

const PaymentsTypesAccordion = () => {
    return (
        <div className="collapse collapse-plus bg-base-200 mt-5">
            <input type="radio" name="my-accordion-3" /> 
            <div className="collapse-title text-xl font-medium">
                Tipos de pagos
            </div>
            <div className="collapse-content flex flex-wrap gap-2"> 
                <FaCcMastercard className="text-5xl"/>
                <FaCcVisa className="text-5xl"/>
                <SiAmericanexpress className="text-5xl"/>
                <FaCcPaypal className="text-5xl"/>
                <SiMercadopago className="text-5xl"/>
                <FaCcStripe className="text-5xl" />
            </div>
        </div>
    )
}

export default PaymentsTypesAccordion;
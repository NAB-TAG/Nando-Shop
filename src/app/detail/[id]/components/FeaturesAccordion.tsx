import BleachAccordion from "./symbolsAccordion/BleachAccordion";
import DryAccordion from "./symbolsAccordion/DryAccordion";
import IroningAccordion from "./symbolsAccordion/IroningAccordion";
import ProfessionalAccordion from "./symbolsAccordion/ProfessionalAccordion";
import WashAccordion from "./symbolsAccordion/WashAccordion";

const FeaturesAccordion = () => {
    return (
        <div className="collapse collapse-plus bg-base-200 mt-5">
            <input type="radio" name="my-accordion-3" /> 
            <div className="collapse-title text-xl font-medium">
                Caracteristicas
            </div>
            <div className="collapse-content flex gap-2 flex-wrap">
                <WashAccordion />
                <IroningAccordion />
                <DryAccordion />
                <BleachAccordion />
                <ProfessionalAccordion />
            </div>
        </div>
    )
}






export default FeaturesAccordion;
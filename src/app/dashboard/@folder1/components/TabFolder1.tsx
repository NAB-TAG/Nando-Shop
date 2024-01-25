import DailyRenueve from "./chart/DailyRenueve";
import MonthyRenueve from "./chart/MonthyRenueve";

const TabFolder1 = () => {
    return (
        <div role="tablist" className="tabs tabs-lifted mb-10">
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Ganancias Diarias" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 h-72">
                <h4 className="text-2xl text-center">Ganancias Diarias</h4>
                <DailyRenueve />
            </div>
        
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Ganancias Mensuales" defaultChecked />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 h-72">
                <h4 className="text-2xl text-center">Ganancias Mensuales</h4>
                <MonthyRenueve />
            </div>
        
        </div>   
    )
}       

export default TabFolder1;
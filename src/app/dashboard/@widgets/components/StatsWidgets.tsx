import { FaArrowAltCircleUp, FaDollarSign, FaUserAstronaut } from "react-icons/fa"
import { FaCartFlatbed } from "react-icons/fa6"

const StatsWidgets = () => {
    return (
        <div className="stats stats-vertical md:stats-horizontal shadow-lg mb-10">
  
            <div className="stat">
                <div className="stat-figure text-secondary">
                    <FaDollarSign className="text-5xl"/>
                </div>

                <div className="stat-title">Ingresos Mensuales</div>
                <div className="stat-value">US$ 4.651</div>
                <div className="stat-desc flex items-end">
                    
                    <span className="text-xl">
                        (+22%)
                    </span>
                    <FaArrowAltCircleUp className="text-2xl mb-1 ml-2 text-success items-end"/>
                </div>
            </div>
            
            <div className="stat">
                <div className="stat-figure text-secondary">
                    <FaCartFlatbed className="text-5xl"/>
                </div>

                <div className="stat-title">Nuevas Ordenes</div>
                <div className="stat-value">370</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <FaUserAstronaut className="text-5xl"/>
                </div>

                <div className="stat-title">Usuarios Registrados</div>
                <div className="stat-value">4,200</div>
            </div>
  
        </div>
    )
}

export default StatsWidgets
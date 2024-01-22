import { FaCartPlus, FaHeartCirclePlus, FaRegCommentDots } from "react-icons/fa6";

export default function LayoutProductDetail({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <div className="btm-nav md:hidden z-50">
                <button className="btn-primary bg-primary ">
                    <FaHeartCirclePlus className="text-2xl"/>
                    <span className="">Agr.Favoritos</span>
                </button>
                <button className="btn-primary bg-primary  border-blue-600">
                    <FaRegCommentDots className="text-2xl"/>
                    <span className="">Comentar</span>
                </button>
                <button className="btn-primary bg-primary ">
                    <FaCartPlus className="text-2xl"/>
                    <span className="">Agr.Carrito</span>
                </button>
            </div>
        </>
        
    )
}


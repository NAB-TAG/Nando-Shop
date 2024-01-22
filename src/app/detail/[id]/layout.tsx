import { FaCartPlus, FaHeartCirclePlus, FaRegCommentDots } from "react-icons/fa6";

export default function LayoutProductDetail({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <div className="btm-nav md:hidden z-50">
                <button className="bg-pink-200 text-pink-600">
                    <FaHeartCirclePlus className="text-2xl"/>
                    <span className="btm-nav-label">Agr.Favoritos</span>
                </button>
                <button className="bg-blue-200 text-blue-600 border-blue-600">
                    <FaRegCommentDots className="text-2xl"/>
                    <span className="btm-nav-label">Comentar</span>
                </button>
                <button className="bg-teal-200 text-teal-600">
                    <FaCartPlus className="text-2xl"/>
                    <span className="btm-nav-label">Agr.Carrito</span>
                </button>
            </div>
        </>
        
    )
}


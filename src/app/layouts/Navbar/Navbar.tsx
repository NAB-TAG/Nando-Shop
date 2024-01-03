"use client"
import Dropdown from "@/components/dropdown/Dropdown";
import { themes } from "./dataNavbar";
import InputTheme from "./compsNavbar/InputTheme";
import SearchbarNavbar from "./compsNavbar/SearchbarNavbar";
import style from "./Navbar.module.css"
import useScroll from "@/utils/hooks/useScroll";

const Navbar = () => {
    
    const { scrollUp } = useScroll();

    return (
        <div className={`flex flex-column absolute ${scrollUp ? 'z-50' : 'z-[-1]'}`}>
            <div className={`bg-base-100 z-[10] fixed transition-all duration-500 w-full justify-end flex ${scrollUp ? 'translate-y-0 opacity-100':'-translate-y-full opacity-0 z-[-1]'}`} >
                <div className={ `${ style.NavbarOptions } flex-none` }>

                    <Dropdown title="Temas" listClassName="overflow-y-auto overflow-x-hidden max-h-[calc(100vh)] h-[28.6rem] inline-flex flex-col" containerClassName="p-0 supports-(color:oklch(0_0_0)):hidden" btnClassName="min-h-min h-min py-2">
                        {themes.map((theme, index) => {
                            return <InputTheme key={index} ariaLabel={ theme } value={ theme }/>
                        })}
                    </Dropdown>
                </div>
            </div>
            <div className={`flex ${ scrollUp ? 'z-[0]' :'z-[-1]'}`}>
                <SearchbarNavbar scrollUp={scrollUp}/>
            </div>
        </div>
    )
}

export default Navbar;
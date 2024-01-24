'use client'
import useClickOutside from '@/utils/hooks/useClickOutside';
import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';

// Start : Dropdown (Ln:23)
interface DropdownProps {
  title: string;
  children: React.ReactNode;
  listClassName?: string;
  containerClassName?: string;
  accessibilityLabel?: string;
  btnClassName?: string;
}

/**
 * Componente Dropdown
 * 
 * @param {string} title - El título del dropdown.
 * @param {React.ReactNode} children - Contenido del dropdown.
 * @param {string} listClassName - Clase para la lista del dropdown.
 * @param {string} containerClassName - Clase para el contenedor del dropdown.
 * @param {string} accessibilityLabel - Etiqueta de accesibilidad para el título.
 */

const Dropdown: React.FC<DropdownProps> = ({ 
    title, 
    children, 
    listClassName = 'p-2 bg-base-100 rounded-t-none', 
    containerClassName = 'px-1', 
    accessibilityLabel = '',
    btnClassName = ''
    }) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [ open, setOpen ] = useState(false);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            // if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            //     // El clic está fuera del componente, puedes realizar acciones aquí
            //     console.log('Clic fuera del componente');
            // }
            if (dropdownRef.current && dropdownRef.current.contains(event.target as Node)) {
                console.log('click dentro del componente')
                setOpen(true)
            }else{
                console.log('click fuera del componente')
                setOpen(false)
            }
        };
    
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);

    return(
        <div className={`dropdown dropdown-bottom dropdown-end ${containerClassName}`} data-testid="Dropdown-container" ref={dropdownRef}>
            
                <ButtonDropdown title={ title } accessibilityLabel={ accessibilityLabel } btnClassName={ btnClassName } onclick={()=>{}}/>
                <ul tabIndex={0} style={(open) ? {}:{visibility: 'hidden',opacity: '1', transition: '.1s'}} className={`dropdown-content z-[100] menu p-2 shadow bg-base-100 rounded-box w-52  ${listClassName}`} data-testid="Dropdown-list" >
                    <div className='overflow-y-auto gap-3 flex flex-col'>

                    { children }
                    </div>
                </ul>
            
        </div>
    );
}
// End : Dropdown

// Start : ButtonDropdown (Ln:53)
interface DropdownButtonProps {
    title: string;
    btnClassName: string;
    accessibilityLabel: string;
    onclick: MouseEventHandler<HTMLDivElement>;
}

const ButtonDropdown: React.FC<DropdownButtonProps> = ({ title, btnClassName, accessibilityLabel, onclick }) => {
    return (
        <div tabIndex={0} role="button" className={`btn m-1 ${btnClassName}`} aria-label={ accessibilityLabel } data-testid="Dropdown-button" onClick={onclick}>
            { title }
        </div>
    )
}
// End : ButtonDropdown

export default Dropdown
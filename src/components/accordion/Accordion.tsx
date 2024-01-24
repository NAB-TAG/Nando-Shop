import Link from "next/link"
import React from "react"

interface AccordionProps {
    title: string,
    items: { href: string, title: string }[]
}
const Accordion: React.FC<AccordionProps> = ({ items, title }) => {
    return (
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-branch" /> 
            <div className="collapse-title text-xl font-medium">
                { title }
            </div>
            <div className="collapse-content flex gap-1 flex-wrap">
                
                { items.map(( item, index ) => (
                    <Link href={ item.href } className="btn h-auto w-full justify-start" key={ index }>
                        <span>{ item.title }</span>
                    </Link>
                ))}
                
            </div>
        </div>
    )
}

export default Accordion
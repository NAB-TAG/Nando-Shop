import React, { ReactNode } from "react";


const Tab: React.FC<any> = ( props, {name}: {name:string} ) => {
    const tabs:{props: {children: string}}[] = [];
    const tabs_name: any[] = [];

    for (const prop in props) {
        if (prop.startsWith('tab_')) {
            tabs.push(props[prop]);
        }
    }
    for (const prop in props) {
        if (prop.startsWith('name_')) {
            tabs_name.push(props[prop]);
        }
    }

    interface tabable { tab: ReactNode }
    interface nameable { name: string }
    interface ariable { aria_label: string }
    interface defaultable { defaultable?: boolean }

    interface RenderProps extends tabable,nameable,ariable,defaultable {}
    const RenderItem: React.FC<RenderProps> = ({ tab, name, aria_label,defaultable = false }) => (
        <>
        { defaultable ? 
            <>
                <input type="radio" name={ name } role="tab" className="tab" aria-label={ aria_label } defaultChecked/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 w-full h-[650px] overflow-y-auto">
                    { tab }
                </div> 
            </>
            :
            
            <>
                <input type="radio" name={ name } role="tab" className="tab" aria-label={ aria_label } />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 w-full h-[650px] overflow-y-auto">
                    { tab }
                </div> 
            </>
        }
        </>


    )
        
    return (
        <div role="tablist" className="tabs tabs-lifted mb-10">
            
            { tabs.map(( tab, index ) => (
                // console.log()
                index == 0 ?
                <RenderItem key={ index } tab={tab.props.children} name={props.name} aria_label={ tabs_name[index] } defaultable={true}/>
                :
                <RenderItem key={ index } tab={tab.props.children} name={props.name} aria_label={ tabs_name[index] }/>
            )) }
        </div>
    )
}

export default Tab
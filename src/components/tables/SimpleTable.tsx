import React from "react";

interface TableInterface {
    children: React.ReactNode,
    headerCols: string[],
}
const SimpleTable: React.FC<TableInterface> = ({ headerCols, children }) => {
    return(
        <table className="table">
            {/* head */}
            
            <thead>
                <tr className="bg-base-200">
                    { headerCols.map(( col, index ) => (
                        <th key={ index }>{ col }</th>
                    )) }
                </tr>
            </thead>
            <tbody>
                { children }
            </tbody>
        </table>
    );
}

export default SimpleTable;
import { Field } from "formik"
import React from "react"

interface Selectable {
    items: { id: number, name: string }[]
}
interface Nameable { name: string }
interface Defaultable { defaultName?: string }

interface SelectFormProps extends Nameable, Selectable, Defaultable {}

/**
 * Componente SelectForm: Un componente de formulario que representa un campo de selección.
 *
 * Propiedades:
 *   - name: Nombre del select.
 *   - items: Lista de options para el select.
 *   - defaultName: Nombre predeterminado que se muestra en el option deshabilitado.
 */
const SelectForm:React.FC<SelectFormProps> = ({ name, items, defaultName = 'Filtrar' }) => {

    {/* Renderiza todos los items  */}
    const renderOptions = () => (
        <>
            { items && items.map(( option ) => (
                <option key={ option.id } value={ option.id }>
                    { option.name }
                </option>
            )) }
        </>
    )

    return (
        <Field as="select" name={ name } className="select select-bordered join-item" >
            {/* Un Option deshabilitado que esta por defecto  */}
            <option disabled defaultValue="">
                { defaultName }
            </option>

            { renderOptions() }
        </Field>
    )
}

export default SelectForm
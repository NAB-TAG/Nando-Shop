import Swal, { SweetAlertIcon, SweetAlertOptions } from "sweetalert2";

export namespace SweetAlertOptionsConstants{
    export const normal = ( 
        oklchSupport: boolean, 
        icon: SweetAlertIcon, 
        title: string, 
        customOptions?: Record<string, any>
    ): SweetAlertOptions => {
        
        const baseOptions = {
            title: title,
            icon: icon,
            confirmButtonColor: oklchSupport ? "oklch(var(--su))" : undefined,
            cancelButtonColor: oklchSupport ? "oklch(var(--er))" : undefined,
            background: oklchSupport ? "oklch(var(--b1))" : undefined,
            color: oklchSupport ? "oklch(var(--p))" : undefined,
        };

        return { ...baseOptions, ...customOptions };
    }

    export const inputFetch = (
        oklchSupport: boolean, 
        icon: SweetAlertIcon, 
        title: string, 
        customOptions?: Record<string, any>,
    ) => {
        let alertOptions = normal(oklchSupport, icon, title, customOptions);
        let swalOptions:SweetAlertOptions  = {
            ...alertOptions,
            inputAttributes: {
              autocapitalize: "off"
            },
            showCancelButton: true,
            showLoaderOnConfirm: true,
            allowOutsideClick: () => !Swal.isLoading()
        }

        return {...swalOptions};
    }
}
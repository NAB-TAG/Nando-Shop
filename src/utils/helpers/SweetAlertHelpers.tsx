import Swal, { SweetAlertIcon, SweetAlertOptions } from "sweetalert2";
import { SupportConstant } from "../constants/SupportConstants";

export namespace SweetAlertHelper {
    const oklchSupport = SupportConstant.oklchSupport;

    export const normal = ( icon: SweetAlertIcon, title: string, customOptions?: Record<string, any>) => {
        const alertOptions = getAlertOptions(oklchSupport, icon, title, customOptions);
        Swal.fire(alertOptions);
    }

    export const confirmer = ( icon: SweetAlertIcon, title: string, customOptions?: Record<string, any>, isConfirmed?: () => void ) => {
        const alertOptions = getAlertOptions(oklchSupport, icon, title, customOptions);
        Swal.fire(alertOptions)
        .then((result) => {
            if (result.isConfirmed && isConfirmed) {
                isConfirmed();
            } 
        })
    }
    
    export const fetch = ( 
      icon: SweetAlertIcon, 
      title: string, 
      customOptions?: Record<string, any>, 
      action?: (result:string)=> Promise<any>,
      success?: () => void
      ) => {
        let alertOptions = getAlertOptions(oklchSupport, icon, title, customOptions);
        let swalOptions:SweetAlertOptions  = {
            ...alertOptions,
            inputAttributes: {
              autocapitalize: "off"
            },
            showCancelButton: true,
            showLoaderOnConfirm: true,
            preConfirm: async (result: any) => {
              
              try {
                  if (action) {
                      await action(result); // Esperar a que se complete la acción
                  }
              } catch (error) {
                  Swal.showValidationMessage(`Request failed: ${error}`);
              }
          },
            allowOutsideClick: () => !Swal.isLoading()
        }
        Swal.fire(swalOptions)
        .then((result) => {
            if (result.isConfirmed) {
                
              if (success) {
                success()
              }
                
            } 
        })
    }
    

    const getAlertOptions = (oklchSupport: boolean, icon: SweetAlertIcon, title: string, customOptions?: Record<string, any>): SweetAlertOptions => {
        
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

    const getAlertFetchOptions = (oklchSupport: boolean, icon: SweetAlertIcon, title: string, customOptions?: Record<string, any>, confirmation?: () => void): SweetAlertOptions => {
        const baseOptions = {
            title: title,
            icon: icon,
            confirmButtonColor: oklchSupport ? "oklch(var(--su))" : undefined,
            cancelButtonColor: oklchSupport ? "oklch(var(--er))" : undefined,
            background: oklchSupport ? "oklch(var(--b1))" : undefined,
            color: oklchSupport ? "oklch(var(--p))" : undefined,
            confirmButtonText: "Crear Evento",
            cancelButtonText: "Cancelar",
            inputAttributes: {
              autocapitalize: "off"
            },
            showCancelButton: true,
            showLoaderOnConfirm: true,
            preConfirm: async (result: string) => { // Asegúrate de ajustar la firma
                if (confirmation) {
                    confirmation();
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        }

        return { ...baseOptions, ...customOptions }
    }
}
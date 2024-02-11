import { UserAdapterInterface } from "./user/UserAdapterInterface";

/**
 * Adapta los datos de un usuario a un formato valido para del desarrollador, evita problemas cuando los nombres de los campos de la db cambia
 */
export namespace UserAdapter {
    /**
     * Adapta los datos del usuario recibido
     * @param user datos recibidos para adaptar
     * @returns 
     */
    export const get = ( user: UserAdapterInterface.GetInterface ) => {
        const getFormattedUser = {
            name: user.name,
            email: user.email,
        };
        
        return getFormattedUser;
    }
}
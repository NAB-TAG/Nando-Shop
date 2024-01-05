export namespace MathHelpers{

    // Devuelve el valor absoluto de un numero
    export const valueAbsolute = ( num: number ) => {
        return Math.abs(num);
    }

    export const roundSimple = ( num: number ) => {
        return Math.round(num);
    }

    // Redondea un numero
    export const roundOut = ( num: number, up: boolean = true ) => {
        return up ? Math.ceil( num ) :Math.floor( num );
    }

    // Devuelve un numero random
    export const random = ( maxDigits: number ) => {
        let random = Math.random() * maxDigits;
        random = Math.ceil(random);
        return random;
    }

    // Limpia el numero elimina decimales
    export const clean = ( num: number ) => {
        return Math.trunc(num);
    }

    // Calcular el resultado de un descuento
    export const discount = ( num: number, discount:number ) => {
        return num - ((discount / 100) * num);
    }
}
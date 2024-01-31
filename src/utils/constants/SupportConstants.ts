export namespace SupportConstant {
    export const oklchSupport =  (typeof CSS !== 'undefined' && CSS.supports) ? CSS.supports('color', 'oklch(0 0% 0)'): false;
}
import { useState } from 'react';

const useOklchSupport = () => {

  const [oklchSupport, setOklchSupport] = useState<boolean>(() => {
    if (typeof CSS !== 'undefined' && CSS.supports) {
      return CSS.supports('color', 'oklch(0 0% 0)');
    }
    return false;
  });

  // Retornar el estado y, opcionalmente, funciones para modificar el estado
  return [ oklchSupport, setOklchSupport ];
};


export default useOklchSupport

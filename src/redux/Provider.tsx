"use client"

// Importa el Provider desde react-redux
import { Provider } from 'react-redux';

import React from 'react';
import { store } from './store';

// Asegúrate de que `store` esté configurado correctamente en tu archivo store.js

const Providers = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>
            {children}
        </Provider>
}

export default Providers;

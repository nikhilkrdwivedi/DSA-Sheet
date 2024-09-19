
import React, { createContext, useContext, useState } from 'react';
const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
    const [loader, setLoader] = useState({
        isLoading: false,
        type: ''
    });

    return (
        <LoaderContext.Provider value={{ setLoader, loader }}>
            {children}
        </LoaderContext.Provider>
    );
};

export const useLoader = () => useContext(LoaderContext);
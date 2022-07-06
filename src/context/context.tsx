import React, { createContext, useState } from "react";

export const Context = createContext(null);

function ContextProvider({ children }) {

    return (
        <Context.Provider value={{}}>
            { children }
        </Context.Provider>
    );
}

export default ContextProvider;

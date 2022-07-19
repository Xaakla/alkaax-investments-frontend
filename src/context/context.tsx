import React, { createContext, useState } from "react";

export const Context = createContext(null);

function ContextProvider({ children }) {

    const [stockGlobalRefreshing, setStockGlobalRefreshing] = useState(false);

    return (
        <Context.Provider value={{
            stockGlobalRefreshing, setStockGlobalRefreshing
        }}>
            { children }
        </Context.Provider>
    );
}

export default ContextProvider;

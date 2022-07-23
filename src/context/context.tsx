import React, { createContext, useState } from "react";

export const Context = createContext(null);

function ContextProvider({ children }) {

    const [globalRefreshing, setGlobalRefreshing] = useState(false);

    return (
        <Context.Provider value={{
            globalRefreshing, setGlobalRefreshing
        }}>
            { children }
        </Context.Provider>
    );
}

export default ContextProvider;

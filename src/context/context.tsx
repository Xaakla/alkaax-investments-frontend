import React, { createContext, useState } from "react";

export const Context = createContext(null);

interface IStockModel {
    id?: number;
    code?: string;
}

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

function ContextProvider({ children }) {
    const [stocksRefreshing, setStocksRefreshing] = useState(false);
    const [stocks, setStocks] = useState([]);

    const [isStockModalVisible, setIsStockModalVisible] = useState(false);
    const [stockModel, setStockModel] = useState<IStockModel>({id: null, code: ""});

    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [titleDeleteModal, setTitleDeleteModal] = useState("hehe");
    
    const [confirmDeleteCallback, setConfirmDeleteCallback] = useState(() => {});

    const refreshStocksList = React.useCallback(() => {
        setStocksRefreshing(true);
        wait(2000).then(() => setStocksRefreshing(false));
    }, []);
    
    return (
        <Context.Provider value={{
            stocksRefreshing, setStocksRefreshing, refreshStocksList,
            stocks, setStocks,
            isStockModalVisible, setIsStockModalVisible,
            stockModel, setStockModel,
            isDeleteModalVisible, setIsDeleteModalVisible,
            titleDeleteModal, setTitleDeleteModal
        }}>
            { children }
        </Context.Provider>
    );
}

export default ContextProvider;

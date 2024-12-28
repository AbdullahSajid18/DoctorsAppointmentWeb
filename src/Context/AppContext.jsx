/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext } from "react";
import { doctors } from "../assets/assets_client/assets";

export const AppContext = createContext()

const AppContextProvider = (props) => {




    const contextValue = {
        doctors
    }

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )
}


export default AppContextProvider;
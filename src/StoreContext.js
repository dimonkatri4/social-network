import * as React from "react";

const StoreContent = React.createContext(null)

export const Provider = (props) => {
    return <StoreContent.Provider value={props.store}>
        {props.children}
    </StoreContent.Provider>
}

export  default  StoreContent
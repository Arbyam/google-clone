import React, {createContext, useContext, useReducer} from "react";
//prepping the data layer
export const StateContext = createContext();

export const StateProvider = ({reducer, intiailState,children}) =>(
    <StateContext.Provider value = {useReducer(reducer,intiailState)}>
{children}

    </StateContext.Provider>
)


//hook that allows us to pull info from the data layer
export const useStateValue = () => useContext(StateContext);
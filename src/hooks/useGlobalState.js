import React, { createContext, useReducer, useContext } from 'react'

/* Action Types */
const SET_ID = 'SET_ID'

/* Define a context, initial state and a reducer */
const GlobalStateContext = createContext()

const initialState = {
    id: {
        name: null,
        age: null,
        occupation: null,
    },
}

const globalStateReducer = (state, action) => {
    switch (action.type) {
        case SET_ID:
            return {
                ...state,
                id: { ...action.payload },
            }
        default:
            return state
    }
}

/* 
    Export a component to provide the context to its children
    This is used to wrap our app's top-level component
*/

export const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(globalStateReducer, initialState)

    return (
        <GlobalStateContext.Provider value={[state, dispatch]}>
            {children}
        </GlobalStateContext.Provider>
    )
}

/*
    Default export is a hook that provides a simple API for updating the global state
    This also allows us to keep all of this state logic in this one file
*/

const useGlobalState = () => {
    const [state, dispatch] = useContext(GlobalStateContext)

    const setId = ({ name, age, occupation }) => {
        dispatch({
            type: SET_ID,
            payload: { name, age, occupation }
        })
    }

    return {
        setId,
        id: { ...state.id }
    }
}

export default useGlobalState
import React, {createContext, useReducer} from 'react'

export const ColorContext = createContext()

export const COLOR_UPDATE = 'COLOR_UPDATE'

export const ColorReducer = (state, action) => {
    switch (action.type) {
        case COLOR_UPDATE:
            return action.color
        default:
            return state
    }
}

export const Color = (props) => {
    const [color, dispatch] = useReducer(ColorReducer, 'blue')
    return (
        <ColorContext.Provider value={{color, dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
}
import { createContext, useReducer } from "react";
// context can be applied to all or portions of components
// thereby providing access to any state in the context, avoids unnecessary prop drilling
// contextProvider is used to wrap components


// create new context object ThemeContext
export const ThemeContext = createContext()

const themeReducer  =(state, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {...state, color: action.payload }
        case ('CHANGE_MODE'):
            return {...state, mode: action.payload}
            default:
                return state
    }

}
// function which is a react component which can be used to deconstruct children prop
// and is then used to nest components in index.js
export function ThemeProvider({children}){

    const [state, dispatch] = useReducer(themeReducer, {
        color: '#58249c',
        mode: 'dark'
    })

    const changeColor = (color) => {
        dispatch({ type:'CHANGE_COLOR', payload: color})
    }

    const changeMode = (mode) => {
        dispatch({ type:'CHANGE_MODE', payload: mode})
    }
    // provider is used to wrap components wherew you want to use context data
    return (
        <ThemeContext.Provider value={{...state, changeColor, changeMode}}>
            {children}

        </ThemeContext.Provider>
    )
}

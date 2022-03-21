import React, { useContext } from 'react'

const PrijaveContext = React.createContext()

export const usePrijave = () => {
return useContext(PrijaveContext)
}

export const PrijaveProvider = ({children}) => {
    //funkcije
    const helloWorld = ()=>{
        console.log("Hello world")
    }
    //vrednosti
return <PrijaveContext.Provider value={{ helloWorld }}> {/*Ovde te vrednosti saljete komponentama*/}
{children}
</PrijaveContext.Provider>
}
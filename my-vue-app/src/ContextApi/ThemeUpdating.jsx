import React, { createContext, useState } from 'react'
const ThemeSetUp =    createContext()

const ThemeUpdating = (props) => {
const [theme,setTheme] = useState("dark")
  return (
    <>
    <ThemeSetUp.Provider value={{theme}}>
    {props.children}
    </ThemeSetUp.Provider>
    </>
  )
}

export default ThemeUpdating
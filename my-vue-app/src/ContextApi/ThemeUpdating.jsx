import React, { createContext, useState } from 'react'
const ThemeSetUp =    createContext()

const ThemeUpdating = (props) => {
const [theme,setTheme] = useState("dark")

 const ToggleTheme = ()=>{
    setTheme(theme === "dark" ? "light" : "dark")
 
 }
  return (
    <>
    <ThemeSetUp.Provider value={{theme,ToggleTheme}}>
    {props.children}
    </ThemeSetUp.Provider>
    </>
  )
}

export default ThemeUpdating
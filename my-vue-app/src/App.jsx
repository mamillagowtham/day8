import React, { useContext } from 'react'
import App2 from './App2'

const App = () => {
  const {theme} =  useContext(ThemeSetUp)
  return (
    <div style={{backgroundColor:theme === "dark" ? "light" : "dark"}}>
        <button Onclick = {ToggleTheme}>theme butn</button>
    </div>
  )
}

export default App
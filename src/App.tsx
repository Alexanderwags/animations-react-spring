import React from "react"
import "./App.css"
import { Routes } from "routes/Routes"
import GlobalApp from "container/global/Global"

function App() {
  return (
    <div className="App">
      <GlobalApp>
        <Routes />
      </GlobalApp>
    </div>
  )
}

export default App

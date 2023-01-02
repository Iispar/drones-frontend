import React from 'react'
import Main from './components/Main'
import Header from './components/Header'
import './components/Main.css'
import './components/Map.css'

const App = () => {
  return (
    <div className="grid-container">
      <div className="header-container">
        <Header></Header>
      </div>
      <div className="main-container">
        <Main></Main>
      </div>
    </div>
  )
}

export default App

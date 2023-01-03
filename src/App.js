import React from 'react'
import Main from './components/Main'
import Header from './components/Header'
import './components/Main.css'
import './components/Map.css'

/**
 * Basic structure for the application. Used a grid layout but only have
 * need for the header and a main element that is split into two.
 */
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

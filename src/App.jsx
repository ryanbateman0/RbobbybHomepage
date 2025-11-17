import { useState } from 'react'
import './App.css'
import Project from './components/Project'

function App() {
  

  return (
    <>
      <div className='centerHeader'>
        <header>RbobbyB's Projects</header>
      </div>
      <div className='projects'>
      <Project
        title={"Basketball Reference Guesser Game"}
        description={"Get screenshots of NBA players career stats and guess who it is"}
        projectURL={"bbreferenceguesser"}
      />
      <Project
        title={"Unity Game: Steering Factors"}
        description={"Boat combat game where you destroy barrels and defeat the zombie mermaid"}
        projectURL={"steering-factors"}
      />
      <Project
        title={"Ultimate Tic Tac Toe"}
        description={"Play 9 games of tic tac toe at once against another player"}
        projectURL={"ultimate-tictactoe"}
      />
      </div>
      
    </>
  )
}

export default App

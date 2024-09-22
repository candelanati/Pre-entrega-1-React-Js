import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Logo from './components/Logo/Logo'
import CardPoster from './components/CardPoster/CardPoster'
import Button from './components/Button/Button'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main>
      <NavBar/>
      <Logo/>
      <CardPoster/>
      <div className='div-button-order'>
          <Button text="order" />
        </div>
    </main>
  )
}

export default App

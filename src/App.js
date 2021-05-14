import {useRef, useEffect} from 'react'
import Typed from 'typed.js'
import './App.css'
import Logo from './Logo'

function App() {
  const typeTarget = useRef(null)

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: ['Coming Soon...', 'Coming very soon...'],
      typeSpeed: 100,
      startDelay: 25,
      backSpeed: 10,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div className="App">
      <div className="container">
        <Logo />
        <h1>
          <span ref={typeTarget}></span>
        </h1>
        <p>
          Le site est en cours de construction mais Sharp &amp; Wise continue de
          vous accompagner dans vos projets de transformation digitale. Mission
          de conseil en informatique, en développement logiciel, nous vous
          accompagnons sur l'ensemble du cycle de vie de votre projet.
        </p>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import idPhoto from './assets/photo.jpg'
import { Header } from './header/Header'
import { Services } from './content/Services'
import { Courses } from './content/Courses'
import { Contact } from './content/Contact'
import { About } from './content/About'
import { Footer } from './footer/Footer'

function App() {
  const [count, setCount] = useState(0)
  function counter(){
    //Rappel syntaxe useStates
    setCount(count+1)
    return(
      <article id="count">
        <h1>{count}</h1>
        <button onClick={counter}>Compteur</button>
      </article>
    )
  }
  return (
    <>
      <Header title="Ruben T. Formation" />
      <main>
        <About photo={idPhoto}/>  
        <Services />
        <Courses />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
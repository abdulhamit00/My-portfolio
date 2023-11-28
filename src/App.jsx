import './app.scss'
import Contact from './components/contact/Contact'
import Cursor from './components/cursor/Cursor'
import Navbar from './components/navbar/Navbar'
import Hero from './components/navbar/hero/Hero'
import Services from './components/services/Services'
import Parallax from './parallax/Parallax'
import Portfolio from './portfolio/Portfolio'






function App() {


  return (
    <div>

      <Cursor />
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='About'><Services/></section>
      <section id='Services'>
        <Parallax type='services' /></section>
     <section id='Portfolio'><Parallax type='portfolio' /></section>
      <Portfolio />

       <section id='Contact'><Contact /></section> 



    </div>
  )
}

export default App

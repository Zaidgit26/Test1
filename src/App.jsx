import './App.css'
import { useEffect } from 'react'
import quant5xLogo from './assets/quant5x-logo.png'
import '@fontsource/anybody'
import './fonts.css'
import { BsArrowUpRight } from 'react-icons/bs'

function App() {
  useEffect(() => {
    document.title = 'Quant 5X - Turn your Insights into Decisions'
  }, [])

  return (
    <>
      <div className="floating-circle"></div>
      <div className="purple-radial"></div>
      <div className="noise"></div>
      
      <header className="header">
        <div className="logo-container">
          <img src={quant5xLogo} alt="Quant 5X Logo" className="logo" />
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">
              Turn your{' '}
              <span className="animated-words">
                <span>Insights</span>
                <span>Information</span>
                <span>Intelligence</span>
              </span>
            </span>
            <span className="title-line">into Decisions with</span>
            <span className="title-highlight">Quant5X</span>
          </h1>
          <p className="hero-subtitle">Empower Your Business. Predict The Future. Act With Confidence.</p>
          <button className="cta-button">Explore Solutions <BsArrowUpRight className="arrow" /></button>
        </div>
      </main>
    </>
  )
}

export default App

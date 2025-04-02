import { useState, useEffect } from 'react'
import quant5xLogo from './assets/quant5x-logo.png'
import '@fontsource/anybody'
import './fonts.css'
import './app.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.title = 'Quant 5X - Turn your Insights into Decisions'
  }, [])

  return (
    <>
      <div className="floating-circle"></div>
      <div className="purple-radial"></div>
      <div className="noise"></div>
      
      <div className={`menu-overlay ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(false)}></div>
      
      <header className="header">
        <div className="logo-container">
          <img src={quant5xLogo} alt="Quant 5X Logo" className="logo" />
        </div>
        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={menuOpen ? 'active' : ''}>
          <ul className="nav-list">
            <li><a href="#" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#" className="nav-link" onClick={() => setMenuOpen(false)}>About us</a></li>
            <li><a href="#" className="nav-link" onClick={() => setMenuOpen(false)}>Works</a></li>
            <li><a href="#" className="nav-link" onClick={() => setMenuOpen(false)}>Contact us</a></li>
            <li><a href="#" className="nav-link" onClick={() => setMenuOpen(false)}>Careers</a></li>
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
          <button className="cta-button">
            Explore Solutions
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </main>
    </>
  )
}

export default App

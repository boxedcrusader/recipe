import { useState } from 'react'
import bookicon from '../images/icon/bookicon.png'
import search from '../images/icon/search.png'

function Header() {
  const [isHover, setIsHover] = useState(false)

  function handleHover() {
    setIsHover(true)
  }

  function handleMouseOut() {
    setIsHover(false)
  }

  return (
    <div>
      <header className="header-section">
        <img src={bookicon} className="book-icon" alt="" />
        <h1 className="ubuntu-regular">recipebook</h1>
        <a 
          href="#" 
          className="search-link" 
          id="search-link"
          onMouseEnter={handleHover}
        >
          <img src={search} className="search-icon" alt="" />
        </a> 
        <div 
        className={`search-bar ${isHover ? 'active' : ''}`} 
        id="search-bar">
          <input onMouseLeave={handleMouseOut} type="text" className="search-input" placeholder="Search..." />
        </div>         
      </header>
    </div>
  )
}

export default Header

import React from 'react'
import HeaderButton from './button/headerButton'
import cl from './Header.module.css'

function Header() {
  return (
    <header>
        <div className={cl.flexHeader}>
          <h2>Portfolio.</h2>
          <nav className={cl.rightBtn}>
            <HeaderButton active={true} style={{'--i': '1'}}>Home</HeaderButton>
            <HeaderButton active={false} style={{'--i': '2'}}>About</HeaderButton>
            <HeaderButton active={false} style={{'--i': '3'}}>Skills</HeaderButton>
            <HeaderButton active={false} style={{'--i': '4'}}>Works</HeaderButton>
            <HeaderButton active={false} style={{'--i': '5'}}>Contact</HeaderButton>
          </nav>
        </div>
    </header>
  )
}

export default Header
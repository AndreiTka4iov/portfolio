import React, { useEffect, useState } from 'react'
import { useActions } from '../../../hooks/useAction'
import { useTypesSelector } from '../../../hooks/useTypesSelector'
import HeaderButton from '../../UI/button/headerButton'
import cl from './Header.module.css'

function Header() {
  const {show} = useTypesSelector(state => state.burger)
  const {fetchBurger, setShowBurger} = useActions()

  useEffect(()=>{
    fetchBurger(show)
  }, [show])
  return (
    <header>
        <div className={cl.flexHeader}>
          <h2>Portfolio.</h2>
          <nav className={show ? cl.rightBtn + ' ' + cl.show : cl.rightBtn }>
            <HeaderButton active={true} style={{'--i': '1'}} href="#home">Home</HeaderButton>
            <HeaderButton active={false} style={{'--i': '2'}} href="#about">About</HeaderButton>
            <HeaderButton active={false} style={{'--i': '3'}}>Skills</HeaderButton>
            <HeaderButton active={false} style={{'--i': '4'}}>Works</HeaderButton>
            <HeaderButton active={false} style={{'--i': '5'}}>Contact</HeaderButton>
          </nav>
          {show 
          ? <div className={cl.burgerMenu} onClick={()=> setShowBurger(false)}>
              <i className='bx bx-x'></i>
            </div>
          : <div className={cl.burgerMenu} onClick={()=> setShowBurger(true)}>
              <i className='bx bx-menu' ></i>
            </div>
          }
          
        </div>
    </header>
  )
}

export default Header
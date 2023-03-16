import React, { useEffect} from 'react'
import { useActions } from '../../../hooks/useAction'
import { useTypesSelector } from '../../../hooks/useTypesSelector'
import HeaderButton from '../../UI/button/headerButton'
import cl from './Header.module.css'

function Header() {
  const {show} = useTypesSelector(state => state.burger)
  const {fetchBurger, setShowBurger} = useActions()

  useEffect(()=>{
    fetchBurger(show)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show])
  
  return (
    <header>
        <div className={cl.flexHeader}>
          <h2>Portfolio.</h2>
          <nav className={show ? cl.rightBtn + ' ' + cl.show : cl.rightBtn }>
            <HeaderButton style={{'--i': '1'}} href="#home">Home</HeaderButton>
            <HeaderButton style={{'--i': '2'}} href="#about">About</HeaderButton>
            <HeaderButton style={{'--i': '3'}} href="#skills">Skills</HeaderButton>
            <HeaderButton style={{'--i': '4'}} href="#works">Works</HeaderButton>
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
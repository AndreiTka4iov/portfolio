import React, { FC, useEffect } from 'react'
import { useActions } from '../../../hooks/useAction';
import { useTypesSelector } from '../../../hooks/useTypesSelector';
import classes from './HeaderButton.module.css'

interface childrenType {
    children?: React.ReactNode;
    style?: any;
    href?: any;
}

const HeaderButton : FC<childrenType> = ({children, ...props}) => {
  const {show} = useTypesSelector(state => state.burger)
  const {fetchBurger, setShowBurger} = useActions()

  useEffect(()=>{
    fetchBurger(show)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show])

  return (
    <a {...props} className={classes.btnA} onClick={() => setShowBurger(false)}>
      {children}
    </a>
  )
}

export default HeaderButton
import React, { FC } from 'react'
import classes from './HeaderButton.module.css'

interface childrenType {
    children?: React.ReactNode;
    active: boolean;
    style?: any;
    href?: any;
}

const HeaderButton : FC<childrenType> = ({children, active, ...props}) => {
  return (
    <a {...props} className={active ? classes.btnA + ' ' + classes.active : classes.btnA}>
      {children}
    </a>
  )
}

export default HeaderButton
import React, { FC } from 'react'
import classes from './HeaderButton.module.css'

interface childrenType {
    children?: React.ReactNode;
    active: boolean;
    style?: any;
}

const HeaderButton : FC<childrenType> = ({children, active, ...props}) => {
  return (
    <div {...props} className={active ? classes.btnA + ' ' + classes.active : classes.btnA}>
      {children}
    </div>
  )
}

export default HeaderButton
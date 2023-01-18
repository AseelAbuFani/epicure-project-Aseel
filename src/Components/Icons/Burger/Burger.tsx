import React from 'react'
import { StyledBurger } from './Burger.styled'
import { IProps } from '../../Intefaces/IProps';



const BurgerIcon: React.FC<IProps> = ({ setOpen, open }) => {
  
  return (<div >
    <a ><StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger></a>

  </div>
  )
}


export default BurgerIcon;

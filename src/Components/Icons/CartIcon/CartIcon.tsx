import React from 'react'
import { StyledCartIcon} from './CartIcon.styled'
import Cart from '../../../assets/cart.png';
import { IProps } from '../../Intefaces/IProps';



const CartIcon: React.FC<IProps> = ({ setOpen, open }) => {
  
  return (
  <>
    <a ><StyledCartIcon open={open} onClick={() => setOpen(!open)}>
      <img src={Cart}></img>
    </StyledCartIcon></a>
  </>
  )
}


export default CartIcon;

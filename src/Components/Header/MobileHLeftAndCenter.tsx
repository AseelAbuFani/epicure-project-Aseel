import React from 'react'
import Logo from '../../assets/logo.png';
import Close from '../../assets/CloseIcon.png';
import {FlexContainerRow} from './Header.styled'


export { default as Burger } from '../Icons/Burger'
export { default as Menu } from '../Icons/Menu'


const HeaderLeftAndCenter: React.FC = () => {
  
    return (
  <>
    <FlexContainerRow>
      <img style={{height:'20px'}} src={Close} onClick={event =>  window.location.href='/'} ></img>
      <a style={{paddingLeft:'45%'}} href='/'><img  src={Logo}/></a>        
    </FlexContainerRow>
    
  </>
    )
  }
  
  export default HeaderLeftAndCenter;
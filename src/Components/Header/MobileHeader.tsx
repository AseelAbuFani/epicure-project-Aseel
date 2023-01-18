import React from 'react'
import Burger from '../Icons/Burger'
import Menu from '../Icons/Menu'
import SearchIcon from '../Icons/SearchIcon'
import SearchPage from '../Icons/SearchPage/SearchPage'
import Logo from '../../assets/logo.png';
import {FlexContainerRowS, RightPartHeader } from './Header.styled'
import CartIcon from '../Icons/CartIcon'
import CartPage from '../Icons/CartPage'
import ProfilePage from '../Icons/ProfilePage'
import ProfileIcon from '../Icons/ProfileIcon'


export { default as Burger } from '../Icons/Burger'
export { default as Menu } from '../Icons/Menu'


const Header: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    
    return (
      <>
      <FlexContainerRowS>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={function (open: boolean): void {
            throw new Error('Function not implemented.')
          } } />
      
          <a href='/'><img  src={Logo}/></a>
          <RightPartHeader>
          <FlexContainerRowS>
            <SearchIcon  open={open2} setOpen={setOpen2} />
            <SearchPage open={open2} setOpen={function (open2: boolean): void {
              throw new Error('Function not implemented.')
            } } />
            <ProfileIcon open={open4} setOpen={setOpen4} />
            <ProfilePage open={open4} setOpen={function (open4: boolean): void {
              throw new Error('Function not implemented.')
            } } />
            <CartIcon open={open3} setOpen={setOpen3} />
            <CartPage open={open3} setOpen={function (open3: boolean): void {
              throw new Error('Function not implemented.')
            } } />
            </FlexContainerRowS>
            </RightPartHeader>
    </FlexContainerRowS>
    
      </>
    )
  }
  
  export default Header;
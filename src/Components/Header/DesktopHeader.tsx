import React from 'react'
import SearchIcon from '../Icons/SearchIcon'
import Logo from '../../assets/logo.png';
import { FlexContainerRow, FlexContainerRowS, LeftPartHeader, RightPartHeader } from './Header.styled'
import SearchPage from '../Icons/SearchPage/SearchPage';
import ProfileIcon from '../Icons/ProfileIcon';
import ProfilePage from '../Icons/ProfilePage';
import CartIcon from '../Icons/CartIcon';
import CartPage from '../Icons/CartPage';


const Header: React.FC = () => {
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
   
    return (
      <>
      <FlexContainerRowS>
            <FlexContainerRow>
                <LeftPartHeader>
                    <FlexContainerRow>
                    <a href='/' defaultChecked><img src={Logo}/></a>EPICURE 
                    <a  style={{paddingTop:'3%'}} ><input type="radio" className="tabs__radio" name="tabs-example" id="tab1" />
                    <label htmlFor="tab1" className="tabs__label" style={{fontSize:'12px'}} onClick={() => window.location.href = '/AllRestaurantsMobile' }>Restaurants</label></a>
                    
                    <a style={{paddingTop:'3%'}}><input type="radio" className="tabs__radio" name="tabs-example" id="tab2" />
                    <label htmlFor="tab2" className="tabs__label" style={{fontSize:'12px', marginTop:'-8px'}}>Chefs</label></a>
                    </FlexContainerRow>

                </LeftPartHeader>
            </FlexContainerRow>
            <RightPartHeader>
                <FlexContainerRowS>
                    <a>
                    <SearchIcon  open={open2} setOpen={setOpen2} />
                    <SearchPage open={open2} setOpen={function (open2: boolean): void {
                    throw new Error('Function not implemented.')
                    } } />
                    </a>
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
import React from 'react';
import { IProps } from '../../Intefaces/IProps';
import emptyBag from '../../../assets/emptyBag.png';
import { StyledMenu } from '../Menu/Menu.styled';


const SearchPage: React.FC<IProps> = ({ open }) => {
  //note-> This is a temporary design, later I'm going to change it depending on shopping cart is empty or not..
  return (<>
    {/* <StyledMenu open={open}>
      <img style={{maxWidth:'40%',height:'60%',paddingLeft:'25%'}} src={emptyBag} ></img>
    </StyledMenu> */}
      
    </>
  )
  
}


export default SearchPage;
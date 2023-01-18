import React from 'react';
import {Footer} from '../../Footer/Footer';
import { IProps } from '../../Intefaces/IProps';
import { StyledMenu } from './Menu.styled';
import '../../Footer/Footer.styled.ts'


const Menu: React.FC<IProps> = ({ open }) => {

  return (<>

    <StyledMenu open={open}>
      <br/>
      <a href="/AllRestaurantsMobile">Restaurants</a>
      <a href="/AllChefsMobile">Chefs</a>
      <br/><br/>
      <Footer/>
     
    </StyledMenu>
      
    
    </>
  );
  
};


export default Menu;
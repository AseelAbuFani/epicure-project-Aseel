import React from 'react'
import { StyledSearchIcon } from './SearchIcon.styled'
import Search from '../../../assets/SearchIcon.png';
import { IProps } from '../../Intefaces/IProps';



const SearchIcon: React.FC<IProps> = ({ setOpen, open }) => {
  
  return (
  <>
    <a ><StyledSearchIcon open={open} onClick={() => setOpen(!open)}>
      <img src={Search}></img>
    </StyledSearchIcon></a>
  </>
  )
}


export default SearchIcon;

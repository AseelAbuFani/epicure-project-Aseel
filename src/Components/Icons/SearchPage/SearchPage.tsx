import React from 'react';
import { IProps } from '../../Intefaces/IProps';
import { StyledSearchPage, SubtitleOfSearch } from './SearchPage.styled';
import '../../Footer/Footer.styled.ts'
import Close from '../../../assets/CloseIcon.png';
import SearchComponent from '../../SerachBar/SearchComponent';


const SearchPage: React.FC<IProps> = ({ open }) => {
  
  return (<>
    <StyledSearchPage open={open}>

      <img src={Close} onClick={event =>  window.location.href='/'} ></img>
      <SubtitleOfSearch>Search</SubtitleOfSearch><br/>
      <SearchComponent />
    </StyledSearchPage>
    
    </>
  )
  
}


export default SearchPage;
import styled from "styled-components";

export const StyledSearchBar = styled.input`
    font-size:14px;
    max-width:90%;
    border: 1px solid #555;
    background: transparent url("C:\Tsofen\epicure-project\src\assets\SearchIcon.png") no-repeat 13px center;
    font-family: 'Helvetica Neue';
    font-style: normal;
    line-height: 29px;
    color: #000000;
    -ms-flex: 10;  /* IE 10 */  
  flex: none;
    text-indent: 5%;
    border: 1px solid #555;
    width: 100%;
    font-size:13px;

   
@media (min-width: 600px) {
    max-width: 60%;
    font-size: 80%;
}
`;

export const FilteredResults = styled.p`
font-size:18px;
line-height: 10px;
    letter-spacing: 1px;
    width:300px;
    text-align:left;
    @media (min-width: 600px) {
    font-size:24px;
    color: black;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: 1.29px;
    color: #000000;
    flex: none;
    order: 1;
    flex-grow: 1;
}
`;
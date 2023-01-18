import styled from 'styled-components'


interface IProps {
  open: boolean
}
export const SubtitleOfSearch = styled.h1`
position:absolute;
top:0%;
right:65%;
font-size:90%;
font-family: Helvetica Neue;
font-style: normal;
font-weight: 200;
line-height: 22px;
letter-spacing: 1.92px;
color: #000000;
@media (min-width: 600px) {
  position:absolute;
  top:0%;
  right:75%;
}

`;
export const StyledSearchPage = styled.nav<IProps>`
  display: none;
  @media (min-width: 600px) {
    margin-left:25%;
  }
  a {
    width: 377px;
    height: 500px;
    font-style: normal;
    font-weight: 200;
    line-height: 22px;

    /* identical to box height */
    letter-spacing: 1.92px;
    color: #000000;
    font-family: Helvetica Neue;
    height: 22px;
    font-size:130%;
    display:flex;
    flex-direction:column;
    align-items:left;
   
  }
   @media (min-width: 600px) {
    input{
      max-width:80%;
    }
    
   }
  
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    
    img{
      width:20px;
      height:20px;
      position:absolute;
      top:2%;
      left:5%;
      
    }

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5% 50% 5% 5%;
    gap: 24px;

    position: absolute;
    width: 477px;
    height: 300px;
    top:0%;
    left: -1px;

    background: #FFFFFF;
    box-shadow: 2px 4px 10px rgb
  }
`
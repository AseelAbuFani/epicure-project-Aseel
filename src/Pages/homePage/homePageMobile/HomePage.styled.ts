import styled from 'styled-components';
import heroFromMobile from '../../../assets/hero-picture.png';
import heroFromDesktop from '../../../assets/Desktop/hero-picture.png';
export const HomeSearchBar = styled.div`
  background-image: url(${heroFromMobile});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  padding-top:3%;
  @media (min-width: 600px) {
    background-image: url(${heroFromDesktop});
    background-repeat: no-repeat;
    max-height:470px;
    width:100%;
    padding-bottom:10%;

  }

  div{
    background: rgba(255, 255, 255, 0.88);
    padding:0% 5% 2% 5%;
    padding-right: 3%;
    font-family: Helvetica Neue;
    text-align: left;
    font-style: normal;
    font-size:110%;
    text-align:center;
    line-height: 46px;
    letter-spacing: 1.97px;
    color: #000000;
    flex-grow: 0;
    width: 85%;
    margin-top: 5%;
    margin-left: 3%;
    @media (min-width: 600px) {
       font-family: Helvetica Neue;
       text-align: center;
       font-style: normal;
       font-size: 140%;
       width: 54%;
       height:30%;
       margin-top: 14%;
       margin-left: 23%;
       margin-bottom: 7%;
       padding-top:2%;
       padding-bottom:2%;
       padding-left:0%;
      
    }
  }
`;

export const SubtitleInHomePage = styled.div`
    margin-left: 5%;
    padding-top:5%;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    color: #000000;


    @media (min-width: 600px) {
        width: 100%;
        text-align: center;
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-weight: 200;
        font-size: 20px;
        line-height: 35px;
        text-align: center;
        letter-spacing: 1.25px;
        text-transform: uppercase;
        color: #000000;
        flex: none;
        order: 0;
        flex-grow: 0;
        
    }
`;
export const ButtonOfAll = styled.button`
border:none;
background:none;
padding-left:5%;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 35px;
text-align: right;
letter-spacing: 2px;
text-transform: capitalize;
color: #000000;
flex: none;
order: 0;
@media (min-width: 600px) {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: right;
  img{
    height:10px;
    margin-top:1.8%;
  }
}
`;
export const SubtitleToChef = styled.div`
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 200;
  font-size: 100%;
  line-height: 35px;
  padding-left:8%;
  letter-spacing: 1.25px;
  text-transform: capitalize;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
`;


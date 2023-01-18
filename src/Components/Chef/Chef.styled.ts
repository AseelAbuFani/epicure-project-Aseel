import styled from "styled-components"

export const ChefStyled = styled.div`
  

  @media (min-width: 600px) {
    margin-top:2.5%;
    padding-left:6%;
  }
  img{
    width:100%;
    max-heigh:100%;
    @media (min-width: 600px) {
      max-width:370px;
      height:458px;
    }
     
  }
  div{
      background: rgba(255, 255, 255, 0.88);
      font-family: Helvetica Neue;
      font-style: normal;
      line-height: 46px;
      color: #000000;
      flex-grow: 0;
      width:100%;

      position: absolute;
      margin-top:-50px;
      font-weight: 400;
      font-size: 18px;
      text-align: center;
      letter-spacing: 2.67px;
      @media (min-width: 600px) {
        width:370px;
        text-align:center;
        background: rgba(255, 255, 255, 0.8);
        
      }
  }
`;
export const ChefDescription = styled.div`
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 200;
  font-size: 19px;
  line-height: 28px;
  text-align: justify;
  letter-spacing: 1.1px;
  color: #000000;
  text-align: left;
  padding-left:1%;
  @media (min-width: 600px) {
    max-width:600px;
      padding-left:10%;
      padding-top:5%;
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 200;
      font-size: 24px;
      line-height: 35px;
      text-align: justify;
      letter-spacing: 1.25px;
      color: #000000;
  }

`

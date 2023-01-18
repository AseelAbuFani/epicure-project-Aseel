import styled from "styled-components";


export const Column = styled.div`
padding-top:5%;
max-height: 50%;
    overflow-x:scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;  
::-webkit-scrollbar { 
    width: 0;
    height: 0;
} 
   
`;
export const ColResComponent = styled.div`
background: #F9F4EA; 
max-width:100%;

    margin-bottom:10px;
    
    img{
      width:100%;
      max-height:100%;
    }
    div{
      font-family: 'Helvetica Neue';
      order: 1;
      flex-grow: 0;
      font-weight: 600;
      padding-left: 6%;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 2.67px;
    
    }
    span{
      height: 20px;
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 200;
      flex-grow: 0;
      padding-left: 6%;
      font-size: 16px;
      line-height: 30px;
    }
   
  `;
  export const Title = styled.p`
    padding-top:1%;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    letter-spacing: 1.92px;
    text-transform: uppercase;

    color: #000000;

  `;


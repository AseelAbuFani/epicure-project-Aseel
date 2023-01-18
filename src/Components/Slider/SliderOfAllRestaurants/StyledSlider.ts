import styled from "styled-components";

export const SlideContainer = styled.div`
    max-height: 100%;
    display: flex;
    overflow-x:scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;  
    ::-webkit-scrollbar { 
        width: 0;
        height: 0;
    }
`;

export const SlideDesktopContainer = styled.div`
max-height: 50%;
display:flex;
@media (min-width: 600px) {
  padding-left:10%;
}
    
`;

  export const ResComponent = styled.div`
    background: #F9F4EA; 
    width: 200px;
    height: 100%;
    margin-right: 10px;
    flex: none;
    order: 0;
    flex-grow: 0;
    @media (min-width: 600px) {
      text-align: center;
      width: 300px;
       
    }
    img{
      width: 200px;
      height: 140.8px;
      @media (min-width: 600px) {
        width: 100%;
        height: 100%;
      }
    }
    div{
      height: 20px;
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 20px;
      letter-spacing: 1.97px;
      color: #000000;
      flex: none;
      order: 1;
      flex-grow: 0;
      padding-left: 6%;
      @media (min-width: 600px) {
        width: 100%;
        height: 100%;
      }
    
    }
    span{
      height: 20px;
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 200;
      font-size: 18px;
      line-height: 20px;
      letter-spacing: 1.97px;
      color: #000000;
      flex: none;
      order: 1;
      flex-grow: 0;
      padding-left: 6%;
    }
    p{
      padding-left:10%;
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 200;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 1.97px;
      color: #000000;
      flex: none;
      order: 1;
      align-self: stretch;
      flex-grow: 0;
    }

  `;

  
  export const YossiResComponent = styled.div`
    background: #F9F4EA; 
    width: 200px;
    height: 100%;
    margin-right: 20px;
    flex: none;
    order: 0;
    flex-grow: 0;
    @media (min-width: 600px) {
      max-width: 200px;
      max-height: 100%;
    }
    img{
      width: 200px;
      height: 140.8px;
      @media (min-width: 600px) {
        max-width: 200px;
        height: 200px;
      }
    }
    div{
      height: 20px;
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 20px;
      letter-spacing: 1.97px;
      color: #000000;
      flex: none;
      order: 1;
      flex-grow: 0;
      padding-top:5%;
      padding-bottom:5%;
      padding-left: 6%;
      @media (min-width: 600px) {
        max-width: 100%;
        align-items:center;
        text-align:center;
        padding-bottom:20%;
      }
    }

  `;
  export const YossiSlideContainer = styled.div`
  max-height: 50%;
  display: flex;
    overflow-x:scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;  
    ::-webkit-scrollbar { 
        width: 0;
        height: 0;
    }
  @media (min-width: 600px) {
    padding-left:6%;
  }
    
`;

  
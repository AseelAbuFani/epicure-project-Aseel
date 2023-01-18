import styled from 'styled-components'

export const FlexContainerRowS = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const FlexContainerRow = styled.div`
display: flex;
flex-direction: row;

`;

export const LeftPartHeader = styled.span`
    position: absolute;
    left:140px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 27px;
    line-height: 33px;
    letter-spacing: 1.35px;
    color: #000000;
   

    img{
        position:absolute;
        left:-45px;

    }
    a{
        margin-left:20px;
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-weight: 200;
        font-size: 15px;
        line-height: 10px;
        letter-spacing: 1.92px;
        color: #000000;
        flex: none;
        order: 0;
        flex-grow: 0;
        text-decoration: none;
    }
  
`;

export const RightPartHeader = styled.div`
margin-right:5%;
    img{
       margin-right:10px;
       height:95%;
    }
    a{
        margin-right:10px;
    }
    @media (max-width: 600px) {
        margin-right:0%;
       
      }
`;

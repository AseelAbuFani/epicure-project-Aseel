import styled from "styled-components";
export const Restaurant = styled.div`
div{font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 700%;
font-size: 20px;
line-height: 21px;
letter-spacing: 2.67px;
padding-left:3%;
padding-bottom:3%;
color: #000000;
}span{
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height, or 125% */
padding-left:3%;
    
    letter-spacing: 1.97px;
    
    color: #000000;
}
`;
export const Dish = styled.div`
img{
    width:100%;
}div{
    font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 26px;
/* identical to box height, or 144% */

letter-spacing: 2.67px;

color: #000000;


/* Inside auto layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
}span{
    font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 18px;
/* or 112% */

letter-spacing: 1.97px;

color: #000000;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
}h2{
    font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 20px;
line-height: 18px;
/* identical to box height, or 90% */

text-align: left;
letter-spacing: 1.97px;

color: #000000;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
border-bottom: 1px solid rgba(222, 146, 0, 0.9);
padding-bottom: 5px ;
width:fit-content;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin-left:3%;
}label{
    font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 25px;
/* identical to box height, or 100% */

text-align: center;
letter-spacing: 1.97px;

color: #000000;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
padding-left:2%;
}
`;
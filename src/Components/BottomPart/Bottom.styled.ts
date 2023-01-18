import styled from "styled-components";

export const MobileBottomPart = styled.div`
    padding-left:3%;
    display: flex;
    flex-direction: column;
    background: #FAFAFA;
    padding-bottom:5%;
    div{
        letter-spacing: 1.25px;
        text-transform: uppercase;
        align-items: left;
    }
    span{
        
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-weight: 200;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 2.14px;
        color: #000000;
    }
`;
export const Icons = styled.div`
    width:150%;
    height:150%;
`;
export const DesktopBottomPart = styled.div`
    padding-left:8%;
    padding-top:5%;
    display: flex;
    flex-direction: column;
    background: #FAFAFA;
    padding-bottom:5%;
    div{
        width: 50%;
        height: 35px;
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-weight: 200;
        font-size: 30px;
        line-height: 35px;
        letter-spacing: 2.14px;
        text-transform: uppercase;
        color: #000000;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    span{
        width: 569px;
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-weight: 200;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 2.14px;
        color: #000000;
        flex: none;
        order: 1;
        flex-grow: 0;
    }
   
`;
export const DesktopBottomPart_img = styled.div`
    width:100%;
    background: #FAFAFA;
    img{
        display: block;
        padding-top:25%;
        padding-left:50%;
        padding-bottom:15%;
    }
`;
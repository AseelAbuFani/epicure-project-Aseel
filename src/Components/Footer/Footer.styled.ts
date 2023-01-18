import styled from "styled-components";

export const FooterStyled = styled.div`
    font-family: Helvetica Neue;
    line-height: 22px;
    letter-spacing: 1.9199999570846558px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-size: 100%;
    line-height: 22px;
    letter-spacing: 1.92px;
    color: #000000;
    flex: none;
    order: 1;
    flex-grow: 0;
    text-align: left;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    background: #FFFFFF;
    padding-left: 5%;
    a{
        font-family: Helvetica Neue;
        line-height: 22px;
        letter-spacing: 1.9199999570846558px;
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-size: 130%;
        line-height: 22px;
        letter-spacing: 1.92px;
        color: #000000;
        text-decoration:none;
    }
    @media (min-width: 600px) {
        display: flex;
        flex-flow: row wrap;
        margin: 0 25%;

      }

`;

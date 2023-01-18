import styled from "styled-components"
export const SignatureBurger = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FAFAFA;
    gap: 32px;
    
    @media (min-width: 600px) {
        flex-direction: row;
        text-align:center;
    }

`
export const SignatureText = styled.div`
    background: #FAFAFA;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 35px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    color: #000000;
    justify-content: center;
    text-align: center;
    @media (min-width: 600px) {
        flex-direction: row;
        text-align:center;  
              
    }
  
`;
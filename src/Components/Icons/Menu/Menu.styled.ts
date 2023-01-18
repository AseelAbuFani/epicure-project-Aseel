import styled from 'styled-components'

interface Iprops {
  open: boolean
}

export const StyledMenu = styled.nav<Iprops>`
  display: none;
  a {
    font-style: normal;
    font-weight: 200;
    line-height: 20px;
    letter-spacing: 1.92px;
    color: #000000;
    font-family: Helvetica Neue;
    height: 22px;
    font-size:100%;
    display:flex;
    flex-direction:column;
    align-items:left;
    text-decoration: none;
  }
  #cssForFooter{
    padding-left: 0%;
   
  }
  .sign-in{
  background: #090909;
  border-radius: 92px;
  margin-top: 10rem;
  color: #fff;
  text-align: center;
  }
    height: 367px;
    width: 377px;
    left: -1px;
    top: 46px;
    border-radius: 0px;
    padding: 40px 12px 24px 20px;

    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5% 100% 5% 10%;
    gap: 24px;

    position: absolute;
    width: 377px;
    height: 300px;
    left: -1px;

    background: #FFFFFF;
    box-shadow: 2px 4px 10px rgb

`
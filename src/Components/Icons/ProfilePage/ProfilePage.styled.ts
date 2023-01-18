import styled from 'styled-components'


interface IProps {
  open: boolean
}

interface ButtonProps{
  active?:boolean;
  disabled?:boolean;
}
const colors = {
  gray:'#979797',
  white:'#FFFFFF',
  black:'#000000'
}
export const FloatingLabel = styled.label`
    font-size: 13px;
		color: #cccccc;
		position: absolute;
		pointer-events: none;
		top: 0px;
		transition: all 0.1s ease;
`;


export const InputToProfile = styled.input<ButtonProps>`
  width:100%;
  border: none;
  border-bottom: 2px solid black;
  display: block;
  margin-right: auto;
  margin-left: auto;
  outline: none;
  &:focus ~ ${FloatingLabel},
  &:not(:focus):valid ~ ${FloatingLabel}{
    top: -15px;
		left: 0px;
		font-size: 11px;
		opacity: 1;
		color: #404040;
  }
`;

export const Button = styled.button<ButtonProps>`
    
    padding: 5px 24px;
    gap: 10px;
    width: 206px;
    height: 48px;
    text-align: center;
    letter-spacing: 2.67px;
    text-transform: uppercase;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: ${props => props.disabled? colors.gray:colors.black};
    flex: none;
    order: 0;
    flex-grow: 0;
    color:${colors.white};
    display: block;
    margin-right: auto;
    margin-left: auto;
    border:none;
    
  
    
`;
export const SignInButton = styled(Button)`
background : ${colors.white};
color: ${colors.black};
border: 1px solid #000000;

`;



export const StyledProfilePage = styled.nav<IProps>`
  display: none;
  a {
    width: 377px;
    height: 500px;
    font-style: normal;
    font-weight: 200;
    line-height: 22px;
    letter-spacing: 1.92px;
    color: #000000;
    font-family: Helvetica Neue;
    height: 22px;
    font-size:130%;
    display:flex;
    flex-direction:column;
    align-items:left;
  }
   @media (max-width: 600px) {
    right: 10px;
    top: 0px;
    border-radius: 0px;
   }
  
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    @media (min-width: 600px) {
      margin-left:25%;
    }
    img{
      width:20px;
      height:20px;
      position:absolute;
      top:2%;
      left:5%;
    }
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5% 100% 5% 10%;
    gap: 24px;
    position: absolute;
    width: 377px;
    height: 550px;
    left: -1px;
    background: #FFFFFF;
    box-shadow: 2px 4px 10px rgb
  }
`;

export const FloatingLabelGroup = styled.div`
  position: relative;
	margin-bottom: 25px;
`

export const MainTitle = styled.h1`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 2.67px;
    text-transform: uppercase;
    color: #000000;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`;
export const OR = styled.div`
    font-family: sans-serif;
    margin: 5px auto;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 1.97px;
    color: #979797;
    position:relative;
    padding-left:5%;
    padding-right:5%;
    :before{
      content: "";
      display:block;
      width: 126.5px;
      height: 0px;
      border: 0.5px solid #979797;
      position: absolute;
      left: 110%;
      top: 50%;
      z-index: -2;
      }
    :after{
      content: "";
      display:block;
      width: 126.5px;
      height: 0px;
      border: 0.5px solid #979797;
      position: absolute;
      right: 110%;
      top: 50%;
      z-index: -2;
      }

`;
export const ForgotPass = styled.div`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 1.97px;
    color: #000000;
    margin-right: auto;
    margin-left: auto;
`;

export const Subtitle = styled.h6`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 0px;
    text-align: center;
    letter-spacing: 1.97px;
    color: #000000;
    display: block;
    margin-right: auto;
    margin-left: auto;
`;

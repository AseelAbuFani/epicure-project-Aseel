import styled from 'styled-components'

interface Props {
  open: boolean
}

export const StyledProfile = styled.button<Props>`
  width: 1.5rem;
  height: 1.5rem;
 
  z-index: 20;
  display: none;
  border: none;
  cursor: pointer;
  background: transparent;
  &:focus {
    outline: none;
  }
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  
  div {
    width: 1.5rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#030303' : '#030303'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    position: relative;
   
  }
`;

import styled from 'styled-components'


interface Props {
  open: boolean
}

export const StyledSearchIcon = styled.button<Props>`
  width: 1.5rem;
  height: 1.5rem;
  z-index: 20;
  display: none;
  border: none;
  cursor: pointer;
  background: transparent;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
    
  &:focus {
    outline: none;
  }


  div {
    width: 1.5rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#030303' : '#030303'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    position: relative;
    
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }

  }
`;

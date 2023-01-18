import React from 'react'
import { StyledProfile } from './ProfileIcon.styled'
import Profile from '../../../assets/profile.png';
import { IProps } from '../../Intefaces/IProps';



const ProfileIcon: React.FC<IProps> = ({ setOpen, open }) => {
  
  return (
    <>
     <a ><StyledProfile open={open} onClick={() => setOpen(!open)}>
      <img src={Profile}></img>
    </StyledProfile></a>
    </>
  )
}


export default ProfileIcon;

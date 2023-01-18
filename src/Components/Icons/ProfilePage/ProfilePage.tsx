import React, { useState } from 'react';
import { IProps } from '../../Intefaces/IProps';
import { Button,SignInButton, FloatingLabel, FloatingLabelGroup, ForgotPass, InputToProfile, MainTitle, OR, StyledProfilePage, Subtitle} from './ProfilePage.styled';
import '../../Footer/Footer.styled.ts'
import Close from '../../../assets/CloseIcon.png';
import {LoginFormComponent} from './loginForm/LoginFormComponent';
import { useNavigate } from 'react-router-dom';


const SearchPage: React.FC<IProps> = ({ open }) => {

  return (<>
    <StyledProfilePage open={open}>

      <img src={Close} onClick={event =>  window.location.href='/'} ></img>
      <MainTitle>Sign In</MainTitle>
      <Subtitle>To continue the order, please sign in</Subtitle>           
      <LoginFormComponent/>
      <ForgotPass >Forgot Password?</ForgotPass>
      <OR>or</OR>
      <SignInButton onClick={event =>  window.location.href='/register'}>Sign up</SignInButton>
    </StyledProfilePage>
      
    </>
  )
  
}


export default SearchPage;

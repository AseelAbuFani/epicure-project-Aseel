import axios from 'axios';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import * as EmailValidator from 'email-validator';
import { Button, FloatingLabel, FloatingLabelGroup, InputToProfile } from '../ProfilePage.styled';
import { useNavigate } from 'react-router-dom';

export const LoginForm = ({ onSubmit }:any) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(true);

  function handleSubmit(event:any) {
    event.preventDefault();
    setEmail('');
    setPassword('');
    setIsDisabled(true);
  }

    const navigate = useNavigate();
  useEffect(() => {
    if (password !== '' && email !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);

  const submittedLogin = async () => {
    const args = {email, password};
    const validateEmail = EmailValidator.validate(email); // true
    if (!validateEmail){
      const errors:any = validateEmail;
      errors.forEach((error:any) => {
          toast.error(error.message)
      });
      return errors;
  }
    const resopnse = await axios.post('http://localhost:3001/api/users/login', args);
    if (resopnse.data.status === 'failure') {
        toast.error(resopnse.data.message);
        return ;
    };
    if(resopnse.data?.admin){
      window.location.href='/Admin';
    }
    toast.success('Successful Login');
    window.location.href='/';


    };

  return (
    <form onSubmit={handleSubmit}>
    
      <FloatingLabelGroup>
			<InputToProfile id="username-input"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          required />
				<FloatingLabel >Email adress</FloatingLabel>
			</FloatingLabelGroup>
     
        <FloatingLabelGroup>
			<InputToProfile 
          type="password"
          onChange={(e) => setPassword(e.target.value)}
           required />
      <FloatingLabel>Password</FloatingLabel>
			</FloatingLabelGroup>
      
      <Button onClick={submittedLogin} disabled={isDisabled}>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;

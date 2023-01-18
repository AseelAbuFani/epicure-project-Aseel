import React, { Component } from 'react';
import { render } from 'react-dom';
import LoginForm from './LoginForm';

interface AppProps {}
interface AppState {
  name: string;
}

export const LoginFormComponent = () => {
  const onSubmitUsername = (username:any, password:any) => alert(`You entered: ${username} and password ${password}`);

  return (
    <div>
      <div style={{ minWidth: 400 }}>
        <LoginForm onSubmit={onSubmitUsername} />
      </div>
    </div>
  );
};


import React, { useState } from 'react';
import styled from 'styled-components';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleAcceptTermsChange = () => {
    setAcceptTerms(!acceptTerms);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  
const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (!acceptTerms) {
      setLoginMessage('Please accept the terms and conditions.');
    } else if (!email) {
      setLoginMessage('Please enter your email.');
    } else if (!isValidEmail(email)) {
      setLoginMessage('Please enter a valid email address.');
    } else if (!password) {
      setLoginMessage('Please enter your password.');
    } else if (password.length < 6) {
      setLoginMessage('Password must be at least 6 characters.');
    } else {
      // Redirect to success page
      window.location.href = '/success';
    }
  };
  


  return (
    <Container>
      <LoginForm>
        <h2>Login</h2>
        {loginMessage && <LoginMessage>{loginMessage}</LoginMessage>}
        <FormContent>
          <InputLabel>Login ID (Email)</InputLabel>
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <InputLabel>Password</InputLabel>
          <PasswordInput>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <TogglePasswordButton onClick={togglePasswordVisibility}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </TogglePasswordButton>
          </PasswordInput>
        </FormContent>
        <ChangePassword>Change Password</ChangePassword>
        <RememberMe>
          <Checkbox
            type="checkbox"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          <span>Remember Me</span>
        </RememberMe>
        <AcceptTerms>
          <Checkbox
            type="checkbox"
            checked={acceptTerms}
            onChange={handleAcceptTermsChange}
          />
          <span>Accept Terms and Conditions</span>
        </AcceptTerms>
        <LoginButton onClick={handleLogin}>Login</LoginButton>
        <RegisterLink>
          Don't have an account?{' '}
          <a href="/register" style={{ fontWeight: 'bold' }}>
            Register Here
          </a>
        </RegisterLink>
      </LoginForm>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f0f0;
`;

const LoginMessage = styled.p`
  color: #007BFF;
  font-weight: bold;
  margin: 10px 0;
`;

const LoginForm = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 400px;
`;

const FormContent = styled.div`
  text-align: left;
  margin: 0 auto;
`;

const InputLabel = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const PasswordInput = styled.div`
  position: relative;
`;


const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

const TogglePasswordButton = styled.button`
  position: absolute;
  right: 17px;
  top: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const RememberMe = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const AcceptTerms = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const ChangePassword = styled.div`
  text-align: right;
  margin-top: 10px;
  color: #007BFF;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const LoginButton = styled.button`
  background-color: #007BFF;
  color: #fff;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const RegisterLink = styled.div`
  font-size: 14px;
  color: #333;
  margin-top: 10px;
  

  a {
    color: #007BFF;
    text-decoration: none;
    &:hover {
    text-decoration: underline;
  }
  }
`;


export default Login;

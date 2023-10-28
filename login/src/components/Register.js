import React, { useState } from 'react';
import styled from 'styled-components';


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };



  const handleRegister = () => {
    // Email format validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      setRegistrationMessage('Please enter a valid email address.');
    } else if (password.length < 6) {
      setRegistrationMessage('Password must be at least 6 characters long.');
    } else if (password === confirmPassword) {
      setRegistrationMessage('Registration successful. You can now log in.');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        window.location.href = '/aimed-labs';
      }, 2000); 
    } else {
      setRegistrationMessage('Password and Confirm Password do not match.');
    }
  };

  return (
    <Container>
      <RegisterForm>
        <h2>Register</h2>
        <RegistrationMessage>{registrationMessage}</RegistrationMessage>
        <FormContent>
          <InputLabel>Email</InputLabel>
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <InputLabel>Password</InputLabel>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />

          <InputLabel>Confirm Password</InputLabel>
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />

        </FormContent>
        <RegisterButton onClick={handleRegister}>Register</RegisterButton>
        <LoginLink>
          Already have an account?{' '}
          <a href="/aimed-labs" style={{ fontWeight: 'bold' }}>
            Login Here
          </a>
        </LoginLink>
      </RegisterForm>
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

const FormContent = styled.div`
  text-align: left;
  margin: 0 auto;
`;

const RegisterForm = styled.div`
  background-color: #fff;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 400px;
`;

const InputLabel = styled.p`
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

const RegisterButton = styled.button`
  background-color: #007BFF;
  color: #fff;
  width: 100%;
  padding: 10px;
  margin-top: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const LoginLink = styled.div`
  font-size: 14px;
  color: #333;
  margin-top: 10px;

  a {
    color: #007BFF;
    text-decoration: none;
  }
`;

const RegistrationMessage = styled.p`
  color: #007BFF;
  font-weight: bold;
  margin: 10px 0;
`;



export default Register;

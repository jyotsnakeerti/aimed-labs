import React, {useEffect} from 'react';
import styled from 'styled-components';
import { useNavigate }  from 'react-router-dom';

const Success = () => {

    const history = useNavigate();
    useEffect(() => {
    const timer = setTimeout(() => {
        history('/');
    }, 3000);

    return () => clearTimeout(timer);
    }, [history]);

  return (
    <Container>
      <CheckmarkContainer>
        <Checkmark>✓</Checkmark>
      </CheckmarkContainer>
      <Message>Registration Successful</Message>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const CheckmarkContainer = styled.div`
  width: 150px;
  height: 150px;
  background-color: #007BFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const Checkmark = styled.div`
  font-size: 4em;
  color: #fff;
`;

const Message = styled.div`
  font-size: 1.5em;
  text-align: center;
`;

export default Success;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("https://img.freepik.com/free-photo/beautiful-sky-landscape-digital-art-style_23-2151120838.jpg?t=st=1721733333~exp=1721736933~hmac=f347e7285d1b2af6020a4f1c0e729261ecf5dd7fc1bd251a64415f0721f5d462&w=996");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const MainContainer = styled.div`
  border: 1px solid #444444;
  border-radius: 8px;
  width: 750px;
  height: 400px;
  background-color: #444444;
`;

export const WelcomeMsg = styled.div`
  margin-bottom: 20px;
  color: white;
  text-align: center;
`;

export const InputContainer = styled.div`
  margin-left: 50px;
`;

export const Input = styled.input`
  border: 1px solid white;
  border-radius: 4px;
  width: 300px;
  height: 30px;
`;

export const IdPwMsg = styled.p`
  color: white;
  font-size: 13px;
  font-weight: bold;
  display: flex;
  margin: 0px;
`;

export const LoginButton = styled.button`
  border: 1px solid #b0c4de;
  margin-left: 50px;
  border-radius: 4px;
  width: 306px;
  height: 35px;
  margin-top: 36px;
  background-color: #b0c4de;
`;

export const LinkSignUp = styled.p`
  color: white;
  font-size: 12px;
  margin-left: 50px;
`;

export const Links = styled(Link)`
  color: #b0c4de;
  text-decoration-line: none;
`;

export const Star = styled.p`
  color: red;
`;

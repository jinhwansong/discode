import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StAppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://img.freepik.com/free-photo/beautiful-sky-landscape-digital-art-style_23-2151120838.jpg?t=st=1721733333~exp=1721736933~hmac=f347e7285d1b2af6020a4f1c0e729261ecf5dd7fc1bd251a64415f0721f5d462&w=996');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const StMainContainer = styled.div`
  border: 1px solid #444444;
  border-radius: 8px;
  width: 750px;
  height: 400px;
  background-color:#444444
`

const StWelcomeMsg = styled.div`
  margin-bottom:20px;
  color: white;
  text-align: center
`

const StInputContainer = styled.div`
  margin-left : 50px;

`

const StInput = styled.input`
  border: 1px solid white;
  border-radius: 4px;
  width: 630px;
  height: 30px;
`

const StIdPwMsg = styled.p`
  color:white;
  font-size:13px;
  font-weight: bold;
  display:flex;
  margin:0px
`

const StLoginButton = styled.button`
border: 1px solid #B0C4DE;
  margin-left:50px;
  border-radius: 4px;
  width: 636px;
  height: 35px;
  margin-top:36px;
  background-color:#B0C4DE
`

const StLinkSignUp = styled.p`
  color:white;
  font-size:12px;
  margin-left:50px;
`

const StLink = styled(Link)`
  color: #B0C4DE;
  text-decoration-line: none;
`

const StStar = styled.p`
  color:red;
`

export { StAppContainer, StMainContainer, StWelcomeMsg, StInputContainer, StInput, StIdPwMsg, StLoginButton, StLinkSignUp, StLink, StStar }

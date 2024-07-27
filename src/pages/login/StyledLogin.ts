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

const StWelcomeMsg = styled.div`
  margin-bottom:20px;
  color: white;
  text-align: center
`

const StLinkSignUp = styled.p`
  color:white;
  font-size:12px;
`

const StLink = styled(Link)`
  color: #B0C4DE;
  text-decoration-line: none;
`

export { StAppContainer, StWelcomeMsg, StLinkSignUp, StLink }

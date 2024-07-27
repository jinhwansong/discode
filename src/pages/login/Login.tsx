import {
  StAppContainer,
  StWelcomeMsg,
  StLinkSignUp,
  StLink,
} from './StyledLogin'
import Button from '../../components/atom/Button'
import Input from '../../components/atom/Input'
import { StMainContainer } from '../../components/atom/Container'
import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <StAppContainer>
      <StMainContainer width="55%">
        <StWelcomeMsg>
          <h2>환영합니다!</h2>
          <p>this.chode 에서 친구 혹은 지인들과 재미있는 일상을 보내세요!</p>
        </StWelcomeMsg>
        <form onSubmit={onSubmitHandler}>
          <Input
            id="email"
            type="text"
            label="이메일"
            placeholder="아이디를 입력하세요"
            value={email}
            onChange={e=>setEmail(e.target.value)} />
          <Input
            id="password"
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={e=>setPassword(e.target.value)} />
          <Button type="submit">로그인</Button>
        </form>
        <StLinkSignUp>계정이 필요한가요? <StLink to="/register">가입하기!</StLink></StLinkSignUp>
      </StMainContainer>
    </StAppContainer>
  )
}

export default Login

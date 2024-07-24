import {
    StAppContainer,
    StMainContainer,
    StWelcomeMsg,
    StInputContainer,
    StInput,
    StIdPwMsg,
    StLoginButton,
    StLinkSignUp,
    StLink,
    StStar
  } from './StyledLogin'
  
  
  function Login() {
    return (
      <StAppContainer>
        <StMainContainer>
          <form>
            <StWelcomeMsg>
              <h2>환영합니다!</h2>
              <p>this.chode 에서 친구 혹은 지인들과 재미있는 일상을 보내세요!</p>
            </StWelcomeMsg>
            <StInputContainer>
              <StIdPwMsg><p>이메일</p><StStar>*</StStar></StIdPwMsg>
              <StInput
                type='text'
                placeholder='이메일을 입력해주세요'
              />
              <br />
              <StIdPwMsg><p>비밀번호</p><StStar>*</StStar></StIdPwMsg>
              <StInput
                type='password'
                placeholder='비밀번호를 입력해주세요'
              />
            </StInputContainer>
            <StLoginButton>로그인</StLoginButton>
            <StLinkSignUp>계정이 필요한가요? <StLink to="/register">가입하기!</StLink></StLinkSignUp>
  
          </form>
        </StMainContainer>
      </StAppContainer>
    )
  }
  
  export default Login
  
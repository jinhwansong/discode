import {
  StAppContainer,
  StIdPwMsg,
  StInputContainer,
  StStar,
  StLinkSignUp,
  StLink
} from "../login/StyledLogin"
import {
  StFormContainer,
  StCreateMsg,
  StInput,
  StSignUpButton,
} from "./StyledRegister"

function Register() {
  return (
      <StAppContainer>
          <StFormContainer>
              <StCreateMsg>계정 만들기</StCreateMsg>
              <StInputContainer>
                  <StIdPwMsg><p>이메일</p><StStar>*</StStar></StIdPwMsg>
                  <StInput
                      type="text"
                      placeholder="이메일을 입력해주세요."
                  />
                  <StIdPwMsg><p>비밀번호</p><StStar>*</StStar></StIdPwMsg>
                  <StInput
                      type="password"
                      placeholder="사용하실 비밀번호를 입력해주세요."
                  />
                  <StIdPwMsg><p>닉네임</p><StStar>*</StStar></StIdPwMsg>
                  <StInput
                      type="text"
                      placeholder="사용하실 닉네임을 입력해주세요."
                  />
                  <StIdPwMsg><p>생년월일</p><StStar>*</StStar></StIdPwMsg>
                  <StInput
                      type="date"
                  />
              </StInputContainer>
              <StSignUpButton>가입하기</StSignUpButton>
              <StLinkSignUp><StLink to="/">이미 계정이 있으신가요?</StLink></StLinkSignUp>
          </StFormContainer>
      </StAppContainer>
  )
}

export default Register
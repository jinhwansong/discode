import * as St from './StyledLogin';

const Login = () => (
  <St.AppContainer>
    <St.MainContainer>
      <form>
        <St.WelcomeMsg>
          <h2>환영합니다!</h2>
          <p>this.chode 에서 친구 혹은 지인들과 재미있는 일상을 보내세요!</p>
        </St.WelcomeMsg>
        <St.InputContainer>
          <St.IdPwMsg>
            <p>이메일</p>
            <St.Star>*</St.Star>
          </St.IdPwMsg>
          <St.Input type="text" placeholder="이메일을 입력해주세요" />
          <br />
          <St.IdPwMsg>
            <p>비밀번호</p>
            <St.Star>*</St.Star>
          </St.IdPwMsg>
          <St.Input type="password" placeholder="비밀번호를 입력해주세요" />
        </St.InputContainer>
        <St.LoginButton>로그인</St.LoginButton>
        <St.LinkSignUp>
          계정이 필요한가요? <St.Links to="/register">가입하기!</St.Links>
        </St.LinkSignUp>
      </form>
    </St.MainContainer>
  </St.AppContainer>
);

export default Login;

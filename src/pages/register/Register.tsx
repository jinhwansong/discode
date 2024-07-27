import {
    StAppContainer,
    StLinkSignUp,
    StLink
} from "../login/StyledLogin"
import {
    StCreateMsg,
} from "./StyledRegister"
import Button from "../../components/atom/Button"
import Input from "../../components/atom/Input"
import { StMainContainer } from "../../components/atom/Container"
import { useState } from "react"

function Register() {
    const [email,setEmail]=useState<string>('')
    const [password,setPassword]=useState<string>('')
    const [nickname,setNickname]=useState<string>('')

    const onSubmitCreateHandler = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    }

    return (
        <StAppContainer>
            <StMainContainer width="30%">
                <StCreateMsg>계정 만들기</StCreateMsg>
                <form onSubmit={onSubmitCreateHandler}>
                    <Input 
                    id="email" 
                    type="text" 
                    label="이메일" 
                    placeholder="이메일을 입력하세요." 
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    />
                    <Input 
                    id="password" 
                    type="password" 
                    label="비밀번호" 
                    placeholder="사용하실 비밀번호를 입력하세요." 
                    value={password}
                    onChange={e=>setPassword(e.target.value)}/>
                    <Input 
                    id="nickname" 
                    type="text" 
                    label="닉네임" 
                    placeholder="사용하실 닉네임을 입력하세요." 
                    value={nickname}
                    onChange={e=>setNickname(e.target.value)}/>
                    <Button type="submit">회원가입</Button>
                </form>
                <StLinkSignUp><StLink to="/">이미 계정이 있으신가요?</StLink></StLinkSignUp>
            </StMainContainer>
        </StAppContainer>
    )
}

export default Register
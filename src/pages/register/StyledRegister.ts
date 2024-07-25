import styled from "styled-components";

const StFormContainer = styled.form`
    border: 1px solid #444444;
    border-radius: 8px;
    width: 500px;
    height: 520px;
    background-color:#444444
`

const StCreateMsg = styled.h2`
    text-align:center;
    color:white;
`

const StInput = styled.input`
  border: 1px solid white;
  border-radius: 4px;
  width: 400px;
  height: 30px;
`

const StSignUpButton = styled.button`
border: 1px solid #B0C4DE;
  margin-left:50px;
  border-radius: 4px;
  width: 406px;
  height: 35px;
  margin-top:36px;
  background-color:#B0C4DE
`

export {StFormContainer,StCreateMsg,StInput,StSignUpButton}
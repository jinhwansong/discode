import styled from 'styled-components';

const StFormContainer = styled.form`
  border: 1px solid #444444;
  border-radius: 8px;
  width: 30%;
  background-color: #444444;
  padding: 20px 40px;
`;

const StCreateMsg = styled.h2`
  text-align: center;
  color: white;
`;

const StInput = styled.input`
  border: 1px solid white;
  border-radius: 4px;
  width: 100%;
  height: 30px;
  outline: none;
`;
export { StFormContainer, StCreateMsg, StInput };

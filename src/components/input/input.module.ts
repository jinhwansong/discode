import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 4rem;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.bgBlack};
  color: ${(props) => props.theme.fff};
  font-size: 1.4rem;
  outline: 0;
  border: none;
  padding-inline: 1rem;
  &::placeholder {
    color: ${(props) => props.theme.grey};
  }
`;

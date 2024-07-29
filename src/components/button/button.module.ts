import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 0.5rem;
  background: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.fff};
  font-size: 1.2rem;
  outline: 0;
  border: none;
  padding: 1rem 1.5rem;
`;

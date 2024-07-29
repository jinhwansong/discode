import styled from 'styled-components';

export const ServerWrap = styled.section`
  flex: 1;
`;
export const ServerTop = styled.article`
  border-bottom: 1px solid ${(props) => props.theme.border25};
  padding: 1rem 2rem;
  background: ${(props) => props.theme.bgBlack2};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6.1rem;
  box-sizing: border-box;
  > p {
    color: ${(props) => props.theme.fff};
    font-size: 1.2rem;
  }
`;

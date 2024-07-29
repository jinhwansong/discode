import styled from 'styled-components';

export const DmChatRow = styled.div`
  max-width: 40%;
  height: auto !important;
`;

export const DmChat = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.bgBlack2};
  height: calc(100vh - 6.1rem);
  padding: 2rem 2rem;
  box-sizing: border-box;
`;
export const DmChatMessage = styled.div`
  flex: 1;

  > div > div {
    &::-webkit-scrollbar {
      background: transparent;
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 5rem;
      background: ${(props) => props.theme.bgBlack};
    }
  }
`;
export const InputMessage = styled.div`
  position: relative;
`;

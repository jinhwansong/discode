import styled, { css } from 'styled-components';

const flex = css`
  display: flex;
  align-items: center;
`;

export const DmWrap = styled.section`
  flex: 1;
`;

export const DmTop = styled.article`
  border-bottom: 1px solid ${(props) => props.theme.border25};
  padding: 1rem 2rem;
  background: ${(props) => props.theme.bgBlack2};
  ${flex};
  justify-content: space-between;
  width: 100%;
  height: 6.1rem;
  box-sizing: border-box;
`;
export const DmProfile = styled.div`
  ${flex};
`;
export const DmLinks = styled.div`
  ${flex};
  gap: 2rem;
`;
export const Popup = styled.div`
  > div {
    top: 6rem;
    right: 2rem;
  }
`;
export const DmContent = styled.article`
  display: flex;
`;
export const DmChat = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.bgBlack2};
  height: calc(100vh - 6.1rem);
  padding: 2rem 3rem;
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
export const DmChatRow = styled.div`
  max-width: 40%;
  height: auto !important;
`;
export const InputMessage = styled.div`
  position: relative;
`;

export const DmFriend = styled.div`
  flex: 1;
  background: ${(props) => props.theme.bgBlack6};
`;

export const Back = styled.div`
  background: ${(props) => props.theme.mainColor};
  width: 100%;
  height: 12rem;
`;
export const FriendProfile = styled.div`
  position: relative;
  top: -6.5rem;
  padding: 2rem;
  > p {
    font-size: 1.6rem;
    color: ${(props) => props.theme.fff};
    font-weight: 600;
    margin-block: 0.5rem 2rem;
  }
`;
export const FriendProfileImg = styled.div`
  border: 8px solid ${(props) => props.theme.bgBlack6};
  display: inline-flex;
  border-radius: 50%;
  > span {
    width: 8rem;
    height: 8rem;
    margin: 0;
  }
`;
export const FriendInfo = styled.div`
  background: ${(props) => props.theme.bgBlack7};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  padding: 1.5rem;
  > span {
    color: ${(props) => props.theme.fff};
    display: block;
    font-size: 1.2rem;
  }
  > p {
    color: ${(props) => props.theme.placeholder};
    font-size: 1.2rem;
    font-weight: 400;
  }
`;

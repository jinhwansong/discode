import styled from 'styled-components';

export const FriendWrap = styled.section`
  flex: 1;
`;
export const FriendTop = styled.article`
  border-bottom: 1px solid ${(props) => props.theme.border25};
  padding: 1rem 2rem;
  background: ${(props) => props.theme.bgBlack2};
  display: flex;
  align-items: center;
  width: 100%;
  height: 6.1rem;
  box-sizing: border-box;
`;
export const FriendContent = styled.article`
  display: flex;
  background: ${(props) => props.theme.bgBlack2};
`;
export const FriendTap = styled.div`
  flex: 3;
  background: ${(props) => props.theme.bgBlack2};
  height: calc(100vh - 6.1rem);
  padding: 2rem 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  color: ${(props) => props.theme.fff};
  font-size: 1.2rem;
  > svg {
    fill: ${(props) => props.theme.fff};
  }
  padding-right: 1rem;
  margin-right: 1rem;
  border-right: 1px solid ${(props) => props.theme.border25};
`;
export const Taps = styled.button<{ $active: boolean }>`
  margin-right: 1.5rem;
  color: ${(prop) => (prop.$active ? prop.theme.fff : prop.theme.grey)};
`;

export const Activity = styled.div`
  flex: 1;
  background: ${(props) => props.theme.bgBlack2};
  border-left: 1px solid ${(props) => props.theme.bgBlack6};
  padding: 2rem 2rem;
  box-sizing: border-box;
  > h4 {
    color: ${(props) => props.theme.fff};
    font-size: 1.6rem;
  }
  > p {
    color: ${(props) => props.theme.fff};
    font-size: 1.4rem;
    text-align: center;
    margin-block: 2rem 1rem;
  }
  > span {
    color: ${(props) => props.theme.grey};
    font-size: 1.4rem;
    text-align: center;
    display: block;
  }
`;
export const AddFriend = styled.div``;

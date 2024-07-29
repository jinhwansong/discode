import styled from 'styled-components';

export const None = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.grey};
  font-size: 1.4rem;
`;

export const InputForm = styled.form`
  position: relative;
  > button {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    color: ${(props) => props.theme.fff};
    font-size: 2rem;
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const Title = styled.h4`
  margin-block: 3rem 2rem;
  font-size: 1.2rem;
`;
export const List = styled.div`
  flex: 1;
  overflow-y: scroll;
  padding-right: 1rem;
  &::-webkit-scrollbar {
    background: transparent;
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5rem;
    background: ${(props) => props.theme.bgBlack};
  }
  > div {
    border-top: 1px solid ${(props) => props.theme.border3F};
    position: relative;
    &:hover {
      background: ${(props) => props.theme.border3F};
    }
  }
  > div > a {
    padding: 1.5rem;
    display: block;
  }
`;
export const LeftBox = styled.div`
  display: flex;
  align-items: center;
  > p {
    color: ${(props) => props.theme.fff};
    font-size: 1.2rem;
  }
  > p > span {
    display: block;
    font-size: 1.2rem;
    margin-top: 0.7rem;
    color: ${(props) => props.theme.grey};
  }
`;
export const RightBox = styled.div`
  position: absolute;
  right: 0rem;
  display: flex;
  gap: 1rem;
  top: 0;
  bottom: 0;
  align-items: center;
  > a,
  > button {
    font-size: 2rem;
    color: ${(props) => props.theme.grey};
    background: ${(props) => props.theme.bgBlack6};
    border-radius: 50%;
    display: block;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      color: ${(props) => props.theme.fff};
    }
  }
`;

import styled from 'styled-components';

export const Server = styled.section`
  width: 7rem;
  background: ${(props) => props.theme.bgBlack};
  height: 100%;
  padding: 1rem 1rem 3rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Setting = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
export const ServerList = styled.ul`
  margin-top: 1rem;
  padding-top: 1.1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 2.5rem;
    height: 0.1rem;
    background: ${(props) => props.theme.border1e};
  }
`;
export const CreateServer = styled.button`
  background: ${(props) => props.theme.imgbg};
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 50%;
  display: block;
  margin: 0.8rem auto 0;
`;
export const PopupWrap = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;
export const PopupContent = styled.form`
  position: absolute;
  width: 40rem;
  background: ${(props) => props.theme.bgBlack2};
  border-radius:1rem;
  overflow: hidden;
`;
export const PopupTop = styled.div`
  padding: 2.5rem 2rem;
  > p {
    text-align: center;
    color: ${(props) => props.theme.fff};
    font-size: 1.4rem;
    line-height: 1;
    margin-block: 1rem 2rem;
  }
  > label {
    cursor: pointer;
    text-align: center;
    > input {
      display: none;
    }
    > div {
      width: 13.8rem;
      height: 13.8rem;
      overflow: hidden;
      margin: 0 auto;
    }
    > div > img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  > span {
    font-size: 1.2rem;
    color: ${(props) => props.theme.fff};
    display: block;
    margin-block: 2rem 1rem;
  }
`;
export const PopupTitle = styled.div`
  display: flex;
  justify-content: space-between;
  > h4 {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1;
    color: ${(props) => props.theme.fff};
  }
  > p {
    width: 1.9rem;
  }
  > button{
    font-size: 0;
  }
`;
export const Popupbg = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
`;
export const PopupBtm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: ${(props) => props.theme.bgBlack3};
`;
export const Back = styled.button`
  font-size: 1.2rem;
  color: ${(props) => props.theme.fff};
`;

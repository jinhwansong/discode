import styled from 'styled-components';

export const ImgWrap = styled.div<{ $active: boolean }>`
  position: relative;
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    content: '';
    background: ${(prop) => prop.$active ? prop.theme.mainColor : 'transparent'};
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 50%;
  }
  > div {
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 50%;
    overflow: hidden;
    position: static;
    z-index: 1;
    border: 2px solid ${(prop) => prop.theme.bgBlack};
  }
  > div > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
  }
`;

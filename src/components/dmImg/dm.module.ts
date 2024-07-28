import styled from 'styled-components';

export const DmImgWrap = styled.span<{ $active: boolean }>`
  position: relative;
  display: block;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid
    ${(props) => props.$active ? props.theme.mainColor : props.theme.placeholder};
  margin-right: 0.8rem;
  > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
  }
`;

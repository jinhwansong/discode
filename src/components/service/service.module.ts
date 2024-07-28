import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const DmWrap = styled.section`
  width: 26rem;
  height: 100%;
  background: ${(props) => props.theme.bgBlack4};
  display: flex;
  flex-direction: column;
`;
export const Find = styled.article`
  display: block;
  border-bottom: 1px solid ${(props) => props.theme.border25};
  padding: 1rem;
  top: 0;
  left: 0;
  position: sticky;
  > button {
    background: ${(props) => props.theme.bgBlack5};
    border-radius: 0.5rem;
    width: 100%;
    text-align: left;
    color: ${(props) => props.theme.placeholder};
    font-size: 1.2rem;
    height: 4rem;
    box-sizing: border-box;
    padding-inline: 1rem;
  }
`;
export const Article = styled.article`
  flex: 1;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background: transparent;
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5rem;
    background: ${(props) => props.theme.bgBlack};
  }
`;
export const Nav = styled.nav`
  padding: 0.8rem 1rem 2.5rem;
  display: flex;
  gap: 0.4rem;
  flex-direction: column;
`;
const buttonStyles = css<{ $active: boolean }>`
  font-size: 1.2rem;
  padding-inline: 1rem;
  color: ${(props) =>
    props.$active ? props.theme.fff : props.theme.placeholder};
`;
const LinkToButton = css<{ $active: boolean }>`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  background: ${(props) =>
    props.$active ? props.theme.bgBlack2 : 'transparent'};
  &:hover {
    background: ${(props) => props.theme.bgBlack3};
  }
`;
export const Dmlist = styled.div<{ $active: boolean }>`
  ${LinkToButton}
  height: 4rem;
  position: relative;
  > a {
    display: flex;
    align-items: center;
    ${buttonStyles};
    width: 100%;
  }
  > button {
    position: absolute;
    right: 1rem;
    top: 0;
    bottom: 0;
    margin: auto 0;
    display: none;
  }
  &:hover > button {
    display: block;
  }
`;
export const Links = styled(Link)<{ $active: boolean }>`
  ${LinkToButton}
  ${buttonStyles};
  height: 5rem;

  > svg {
    fill: ${(props) => props.$active ? props.theme.fff : props.theme.placeholder};
    margin-right: 0.8rem;
  }
`;
export const DmTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: 1rem;
  position: relative;
  > h4 {
    color: ${(props) => props.theme.placeholder};
    font-size: 1.2rem;
  }
`;
export const Popup = styled.div`
  > div {
    top: 22rem;
    left: 30rem;
  }
`;

import styled from 'styled-components';
import { IcCheck } from '@/assets';

export const SeletFreind = styled.div`
  width: 35rem;
  background: ${(props) => props.theme.bgBlack2};
  box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 4.6px;
  position: fixed;
  border-radius: 0.5rem;
`;
export const SeletFreindTitle = styled.div`
  padding: 2rem 2rem 1rem;
  > h4 {
    font-weight: 600;
    color: ${(props) => props.theme.fff};
    font-size: 1.6rem;
    line-height: 1;
  }
  > span {
    color: ${(props) => props.theme.placeholder};
    font-size: 1.2rem;
    line-height: 1;
    display: block;
    margin-top: 0.5rem;
  }
`;
export const SeletFreindList = styled.div`
  padding: 0.5rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  height: 20rem;
  gap: 0.5rem;
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
export const SeletFreindItem = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  cursor: pointer;
  color: ${(props) => props.theme.fff};
  &:hover {
    background: ${(props) => props.theme.bgBlack3};
  }
  > div {
    display: flex;
    align-items: center;
  }
  > input {
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    margin: 0;
    width: 2rem;
    height: 2rem;
    border: 1px solid ${(props) => props.theme.border949CF7};
    border-radius: 0.3rem;
    &:checked {
      background: url(${IcCheck}) no-repeat center center;
    }
  }
`;
export const SeletFreindBtn = styled.div`
  padding: 2rem;
  border-top: 1px solid ${(props) => props.theme.bgBlack3};
  > button {
    width: 100%;
  }
`;

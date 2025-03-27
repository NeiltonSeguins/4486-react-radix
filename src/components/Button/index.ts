import styled from "styled-components";

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #0f172a;
  border: transparent;
  cursor: pointer;
  color: #ffffff;
  border-radius: 6px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 1;
  font-weight: 500;
  height: 35px;
  user-select: none;

  &:focus:not(:focus-visible) {
    outline: 0;
  }

  &:focus-visible {
    outline: 1px solid black;
  }
`;

export const IconButton = styled.button`
  all: unset;
  font-family: inherit;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--violet-11);
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

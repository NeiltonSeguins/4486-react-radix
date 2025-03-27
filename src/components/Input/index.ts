import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #e2e8f0;
  padding: 0 10px;
  font-size: 15px;
  line-height: 1;
  color: #64748b;
  height: 35px;

  &:focus {
    box-shadow: 0 0 0 1px black;
  }
`;

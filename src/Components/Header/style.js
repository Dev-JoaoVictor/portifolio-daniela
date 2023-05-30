import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 6rem;
  padding: 0 1rem;

  border-bottom: 1px solid black;

  > svg {
    margin-right: 1rem;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;

  > h2 {
    font-size: 3rem;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 3rem;
  list-style: none;

  margin-top: 3rem;

  > li {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    font-size: 1.3rem;
    flex-direction: column;

    > svg {
      font-size: 3rem;
    }
  }
`;

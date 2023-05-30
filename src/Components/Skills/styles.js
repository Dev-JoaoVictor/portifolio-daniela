import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  list-style: none;

  margin-top: 3rem;

  > li { 

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > svg {
      font-size: 4rem;
    }
  }
  
  
`;

import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  > main {
    display: grid;
    gap: 5rem;
    padding: 3rem 2rem 0;
  }
`;

export const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 1rem;
  text-align: center;

  > img {
    border-radius: 1rem;
    height: 20rem;
  }

  > p {
    font-size: 1.5rem;
  }
`;
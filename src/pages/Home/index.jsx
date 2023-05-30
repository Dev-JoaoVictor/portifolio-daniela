import Perfil from "../../assets/perfil.jpg";

import { Container, About } from "./styles";
import { Header } from "../../Components/Header";
import { Skills } from "../../components/Skills";

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <About>
          <img src={Perfil} alt="Foto de daniela" />
          <p>
            Olá! sou a Daniela Merces dos Santos, tenho 17 anos e sou estudante
            de Comunicação Visual.
          </p>
        </About>
          <Skills/>
      </main>
    </Container>
  );
}

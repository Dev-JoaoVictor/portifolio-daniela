import Perfil from "../../assets/perfil.jpg";
import {
  SiAdobepremierepro,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
} from "react-icons/si";
import { Container, About, Skills } from "./styles";
import { Header } from "../../Components/Header";
import { Section } from "../../components/Section";

const skills = [
  { name: "Premie", icon: SiAdobepremierepro },
  { name: "Illustrator", icon: SiAdobeillustrator },
  { name: "Indesign", icon: SiAdobeindesign },
  { name: "Photoshop", icon: SiAdobephotoshop },
];

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
        <Section title="Habilidades">
          <Skills>
            {skills.map((skill, index) => (
              <li key={index}>
                <skill.icon />
                <span>{skill.name}</span>
              </li>
            ))}
          </Skills>
        </Section>
        <Section title="Projetos">
        </Section>
      </main>
    </Container>
  );
}

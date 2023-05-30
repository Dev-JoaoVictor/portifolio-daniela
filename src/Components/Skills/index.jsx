import { Container, List } from "./styles";
import {
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiAdobepremierepro,
} from "react-icons/si";

const skills = [
  { name: "Illustrator", icon: SiAdobeillustrator },
  { name: "Indesign", icon: SiAdobeindesign },
  { name: "Photoshop", icon: SiAdobephotoshop },
  { name: "Premier", icon: SiAdobepremierepro },
];

export function Skills() {
  return (
    <Container>
      <h2>Habilidades</h2>
      <List>
      {skills.map((skill, index) => (
        <li key={index}>
          <skill.icon />
          <span>{skill.name}</span>
        </li>
      ))}
    </List>
    </Container>
  );
}

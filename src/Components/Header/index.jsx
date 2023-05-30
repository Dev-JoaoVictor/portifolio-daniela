import {FiMenu} from 'react-icons/fi'

import { Container } from "./style"

export function Header() {
  return (
    <Container>
      <h1>Daniela Merces</h1>
      <FiMenu size={20}/>
    </Container>
  )
}
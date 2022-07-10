import { HeaderContainer, Navbar, Logo } from './styles'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <Logo src="https://i.im.ge/2022/07/11/uvy6zM.png" />
      <Navbar>
        <NavLink to="/" title="Timer">
          <Timer size={35} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={35} />
        </NavLink>
      </Navbar>
    </HeaderContainer>
  )
}

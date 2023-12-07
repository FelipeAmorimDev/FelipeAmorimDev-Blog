import { HeaderContainer } from './styles'
import logo from '../../../public/logo.svg'
export function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <img src={logo} alt="" />
      </a>
    </HeaderContainer>
  )
}

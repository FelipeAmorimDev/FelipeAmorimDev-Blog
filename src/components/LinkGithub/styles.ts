import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const LinkExternal = styled.a`
  color: ${(props) => props.theme.blue};
  ${mixins.fonts.link}

  svg {
    margin-left: 8px;
  }

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`

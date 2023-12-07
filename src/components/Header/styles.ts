import styled from 'styled-components'
import bgheader from '../../../public/bg-header.png'

export const HeaderContainer = styled.header`
  padding-top: 64px;
  background: url(${bgheader});
  background-size: 100%;
  background-position: center;

  height: 296px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

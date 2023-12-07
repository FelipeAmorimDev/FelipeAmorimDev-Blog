import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const PostSectionContainer = styled.section`
  max-width: 864px;
  margin: 0 auto;
`

export const PostHeaderContainer = styled.header`
  margin-top: -88px;
  background: ${(props) => props.theme.baseProfile};
  padding: 32px;
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  h1 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme.baseTitle};
    margin-bottom: 8px;
  }
`

export const PostCompleteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  button {
    display: flex;
    align-items: center;
    gap: 8px;
    border: 0;
    background: transparent;
    color: ${(props) => props.theme.blue};
    margin-bottom: 20px;
    ${mixins.fonts.link}

    svg {
      margin-top: -2px;
    }
  }
`

export const PostDetailsContainer = styled.div`
  display: flex;
  gap: 32px;

  > div span {
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${(props) => props.theme.baseSpan};
    ${mixins.fonts.textM}
    svg {
      color: ${(props) => props.theme.baseLabel};
    }
  }
`

export const PostContent = styled.main`
  padding: 32px;
  color: ${(props) => props.theme.baseText};
  display: grid;
  gap: 24px;
  ${mixins.fonts.textM}
`
export const JsCodigoContainer = styled.div`
  padding: 16px;
  background: ${(props) => props.theme.basePost};
`

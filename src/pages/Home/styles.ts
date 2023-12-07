import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const AuthorBlogContainer = styled.div`
  max-width: 864px;
  margin: 0 auto;
  margin-top: -88px;
  margin-bottom: 72px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme.baseProfile};
  border-radius: 10px;

  display: flex;
  gap: 32px;
  padding: 32px 32px 32px 40px;

  img {
    width: 148px;
    border-radius: 8px;
  }

  p {
    max-width: 70ch;
    margin-bottom: 24px;

    color: ${(props) => props.theme.baseText};
    ${mixins.fonts.textM}
  }
`
export const AuthorNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  h1 {
    margin-bottom: 8px;
    ${mixins.fonts.titleL}
  }
`

export const AuthorDetailsContainer = styled.div`
  display: flex;
  gap: 24px;

  span {
    color: ${(props) => props.theme.baseSubtitle};
    ${mixins.fonts.textM}
  }

  > div {
    display: flex;
    align-items: center;
    gap: 8px;
    svg {
      width: 18px;
      height: 18px;
      color: ${(props) => props.theme.baseLabel};
    }
  }
`

export const BlogPostsSection = styled.section`
  max-width: 864px;
  margin: 0 auto 234px;
`

export const BlogPostsHeader = styled.header`
  margin-bottom: 48px;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    strong {
      ${mixins.fonts.titleS}
      color: ${(props) => props.theme.baseSubtitle};
    }
    span {
      ${mixins.fonts.textS}
      color: ${(props) => props.theme.baseSpan}
    }
  }
  input[type='text'] {
    width: 100%;
    padding: 12px 16px;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.baseBorder};
    background: ${(props) => props.theme.baseInput};
    ${mixins.fonts.textM}
    color: ${(props) => props.theme.baseText};

    &::placeholder {
      color: ${(props) => props.theme.baseLabel};
    }
  }
`

export const BlogPostsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  li {
    padding: 32px;
    border: 2px solid transparent;
    background: ${(props) => props.theme.basePost};
    border-radius: 10px;
    height: 260px;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      border-color: ${(props) => props.theme.baseLabel};
      transition: border 0.2s;
      &:focus {
        box-shadow: none;
      }
    }

    span {
      display: block;
      padding-top: 4px;
      ${mixins.fonts.textS}
      color: ${(props) => props.theme.baseSpan}
    }
    p {
      height: 112px;
      ${mixins.fonts.textM};
      overflow: hidden;
      color: ${(props) => props.theme.baseText};
    }
  }
`

export const PostHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;

  h2 {
    ${mixins.fonts.titleM}
  }
`

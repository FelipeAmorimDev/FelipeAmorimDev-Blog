import { css } from 'styled-components'

export const mixins = {
  fonts: {
    titleL: css`
      font-family: 'nunito';
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 130%;
    `,
    titleM: css`
      font-family: 'nunito';
      font-size: 18px;
      font-weight: bold;
      line-height: 160%;
    `,
    titleS: css`
      font-family: 'nunito';
      font-size: 1.125rem;
      font-weight: bold;
      line-height: 160%;
    `,
    textM: css`
      font-family: 'nunito';
      font-size: 1rem;
      line-height: 160%;
    `,
    textS: css`
      font-family: 'nunito';
      font-size: 0.875rem;
      line-height: 160%;
    `,
    link: css`
      font-family: 'nunito';
      font-size: 0.75rem;
      font-weight: bold;
      line-height: 160%;
    `,
  },
}

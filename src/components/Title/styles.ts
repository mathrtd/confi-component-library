import { createGlobalStyle } from 'styled-components';
import { colors, fontSizes, fontWeights } from '../shared/theme';

const baseTitle = `
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  color: ${colors.darkestGray}; 
  margin: 0px;
`

export const GlobalStyle = createGlobalStyle`
  .h1{
    ${baseTitle}
    font-weight: ${fontWeights.w700};
    font-size: ${fontSizes.xx};
  }
  
  .h2{
    ${baseTitle}
    font-weight: ${fontWeights.w700};
    font-size: ${fontSizes.xl};
  }

  .h3{
    ${baseTitle}
    font-weight: ${fontWeights.w700};
    font-size: ${fontSizes.lg};
  }

  .h4{
    ${baseTitle}
    font-weight: ${fontWeights.w700};
    font-size: ${fontSizes.md};
  }

  .button{
    ${baseTitle}
    font-weight: ${fontWeights.w700}; 
    font-size: ${fontSizes.md};
  }

  .hyperlink{
    ${baseTitle}
    font-weight: ${fontWeights.w700};
    font-size: ${fontSizes.md};
  }

  .p1{
    ${baseTitle}
    font-weight: ${fontWeights.w500};
    font-size: ${fontSizes.ml};
  }

  .overline{
    ${baseTitle}
    font-weight: ${fontWeights.w700};
    font-size: ${fontSizes.sl};
  }

  .p2{
    ${baseTitle}
    font-weight: ${fontWeights.w500};
    font-size: ${fontSizes.sm};
  }

  .tag{
    ${baseTitle}
    font-weight: ${fontWeights.w700};
    font-size: ${fontSizes.xs};
  }

  @media (max-width: 425px) {
    .h1{
      font-size: ${fontSizes.xl};
    }
  
    .h2{
      font-size: ${fontSizes.lg};
    }

    .h3{
      font-size: ${fontSizes.ls}; 
    }

    .h4{
      font-size: ${fontSizes.md};
    }

    .button{
      font-size: ${fontSizes.sm};
    }

    .hyperlink{
      font-size: ${fontSizes.sm};
    }

    .p1{
      font-size: ${fontSizes.sm};
    }

    .overline{
      font-size: ${fontSizes.sl};
    }

    .p2{
      font-size: ${fontSizes.sl};
    }

    .tag{
      font-size: ${fontSizes.xs};
    }
  }   
`
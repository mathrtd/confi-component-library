import styled from 'styled-components';
import { borders, colors, fontSizes, fontWeights, spacings } from '../shared/theme';

export const ListContainer = styled.ul`
  display: flex;
  font-family: 'DM Sans', sans-serif;
  
  li{
    list-style: none;
    padding-bottom: ${spacings.sl};
    
    font-style: normal;
    font-weight: ${fontWeights.w700};
    font-size: ${fontSizes.md};

    color: ${colors.darkerGray};

    &:last-child{
      margin-right: 0;
    }

    .divider {
      margin: 0px ${spacings.ls};
    }

    &.active .item {
      color: ${colors.darkestGray};
      border-bottom: ${borders.sm} solid ${colors.primary};
    }
  }
`
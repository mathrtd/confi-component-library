import styled from 'styled-components'
import { borders, colors, spacings } from '../shared/theme'

export const CardContainer = styled.div`
  background: ${colors.white};
  border: ${borders.xs} solid ${colors.gray};
  border-radius: ${borders.md};

  & + div {
    margin-top: ${spacings.ls};
  }
  
  .card-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 70px;
    padding: ${spacings.ls};
    border-bottom: ${borders.xs} solid ${colors.lightGray};
  }

  .card-content{
    padding: ${spacings.ls};
  }

  .card-footer{
    padding: ${spacings.ls};
  }
`
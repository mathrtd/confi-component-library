import styled from 'styled-components';
import { spacings } from '../shared/theme';

export const HiddenInput = styled.input`
  display: none;
`

export const DefaultSingleInput = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${spacings.sm};
`
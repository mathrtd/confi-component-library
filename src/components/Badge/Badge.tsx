import * as React from 'react'

import { BadgeContainer } from './styles';
import { BadgeProps } from './types';

const Badge: React.FC<BadgeProps> = ({
  value,
  fontSize,
}) => {
  return (
    <BadgeContainer fontSize={fontSize}>{value}</BadgeContainer>
  )
}

export default Badge;
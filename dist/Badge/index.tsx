import React from 'react'

import { BadgeContainer } from './styles';
import { BadgeProps } from './types';

export const Badge: React.FC<BadgeProps> = ({
  value,
  fontSize,
}) => {
  return (
    <BadgeContainer fontSize={fontSize}>{value}</BadgeContainer>
  )
}
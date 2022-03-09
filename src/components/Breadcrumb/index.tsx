import React from 'react';
import { ListContainer } from './styles';
import { BreadcrumbProps } from './types';

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, activeItemIndex }) => {
  const lastIndex = items ? items?.length - 1 : 0

  return (
    <ListContainer>
      {items?.map((item, index) => (
        <li key={item} className={index === activeItemIndex ? 'active' : undefined}>
          <span className={'item'}>{item}</span> {index === lastIndex ? "" : <span className={'divider'}>/</span>}
        </li>
      ))}
    </ListContainer>
  );
}
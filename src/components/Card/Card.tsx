import * as React from 'react'
import Title from '../Title/Title'
import { CardContainer } from './styles'
import { CardProps } from './types'

const Card: React.FC<CardProps> = ({
  title,
  child,
  actions,
}) => {
  return (
    <CardContainer>
      <div className="card-header">
        <Title
          text={title}
          elementType="h2"
        />
        {
          actions?.map((action) => action)
        }
      </div>
      

      <div className="card-content">
        {child}
      </div>
    </CardContainer>
  )
}

export default Card;
import * as React from "react"
import { GlobalStyle } from './styles';
import { TitleProps } from "./types";

const Title: React.FC<TitleProps> = ({
  elementType = "title",
  text,
  ...props
}) => {
  const attr = {
    elementType,
    ...props
  }
  const newTag = React.createElement(elementType, attr, text);
  return (
    <>
      <GlobalStyle/>
      <div className={elementType}>
        {text}
      </div>
    </>
  )
}

export default Title;
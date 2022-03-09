type ElementTypeProps = "h1" | "h2" | "h3" | "h4" | "button" | "hyperlink" | "p1" | "overline" | "p2" | "tag"

export interface TitleProps {
  text?: string;
  elementType?: ElementTypeProps;
}
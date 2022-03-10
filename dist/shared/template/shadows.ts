import { 
  fontSizes,
  colors,
} from "./variables";

/**
 * @Description <br/>
 * Shadow: _Adiciona efeito de sombra em volta de um componente._
 * 
 * @Available <br/>
 * _sm: 5% | md: 8% | lg: 12%_
 * _Todos os tipos contam com um padrão específico de sombra, o que altera é apenas sua opacidade._
 * 
 * @Example <br/>
 * _Use shadows.sm para _box-shadow: = 0px 8px 16px 4px "#3A395605".
 */

export const shadows = {
  sm: `0 ${fontSizes.s0500} ${fontSizes.s1000} ${fontSizes.s0250} ${colors.darkestGray05}`,
  md: `0 ${fontSizes.s0500} ${fontSizes.s1000} ${fontSizes.s0250} ${colors.darkestGray08}`,
  lg: `0 ${fontSizes.s0500} ${fontSizes.s1000} ${fontSizes.s0250} ${colors.darkestGray12}`,
}
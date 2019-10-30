import React from "react"
import styled, { css } from "styled-components"

export type Color = "negative" | "positive" | "none"

type Style = {
  color?: Color
}

type Props = React.PropsWithChildren<unknown> &
  Style & {
    label: string
    value: string
  }

const LabelValue = ({ label, value, color = "none", ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Label color={color}>{label}</Label>
      <Value color={color}>{value}</Value>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 20px;
`

const ColoredElement = styled.div<Style>`
  ${(props) =>
    props.color === "negative"
      ? css`
          color: lightseagreen;
        `
      : props.color === "positive"
      ? css`
          color: coral;
        `
      : css`
          color: inherit;
        `};
`

const Label = styled(ColoredElement)`
  text-align: left;
  align-self: flex-start;
`

const Value = styled(ColoredElement)`
  text-align: right;
  align-self: flex-end;
`

export default LabelValue

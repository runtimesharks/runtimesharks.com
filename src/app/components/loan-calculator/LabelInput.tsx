import React from "react"
import styled, { css } from "styled-components"

type Props = any &
  React.PropsWithChildren<unknown> & {
    label: string
    description?: string
    onChange: (e: any) => void
    defaultValue: any
    type?: string
  }

const LabelInput = ({
  className,
  label,
  description,
  type = "text",
  ...rest
}: Props) => {
  return (
    <Container className={className}>
      <Grid>
        <Label>{label}</Label>
        <Input
          type={type}
          // Hacky, hack, hack.
          defaultChecked={rest.defaultValue}
          {...rest}
        />
      </Grid>
      <Description>{description}</Description>
    </Container>
  )
}

const Container = styled.div``

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
`

const Description = styled.h4`
  color: lightgray;
  font-size: 0.6em;
  font-weight: 300;
`

const Label = styled.h4`
  text-align: left;
  font-weight: 400;
`

const Input = styled.input<Props>`
  text-align: right;
  background-color: transparent;
  ${(props) =>
    props.type === "text"
      ? css`
          border-bottom: 2px solid lightgray;
        `
      : null}
  color: inherit;
  outline: none;
  align-self: center;
  justify-self: end;
`

export default React.memo(LabelInput)

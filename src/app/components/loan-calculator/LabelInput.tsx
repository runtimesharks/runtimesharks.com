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

const LabelInput = ({ label, description, type = "text", ...rest }: Props) => {
  return (
    <Container {...rest}>
    <Grid>
      <Label>{label}</Label>
      <Input
        label={label}
        type={type}
        {...rest}
        // Hacky, hack, hack.
        defaultChecked={rest.defaultValue}
      />
      </Grid>
      <Description>{description}</Description>
      </Container>
  )
}

const Container = styled.div``

const Grid = styled.div`
  margin-top: 6px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
`

const Description = styled.h4`
  color: lightgray;
  font-size: 0.6em;
  font-weight: 300;
`

const Label = styled.div`
  text-align: left;
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

export default LabelInput

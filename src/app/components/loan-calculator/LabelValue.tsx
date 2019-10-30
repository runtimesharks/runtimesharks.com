import React from "react"
import styled from "styled-components"

type Props = React.PropsWithChildren<unknown> & {
  label: string
  value: string
}

const LabelValue = ({ label, value, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 20px;
`

const Label = styled.div`
  text-align: left;
`

const Value = styled.div`
  text-align: right;
`

export default LabelValue

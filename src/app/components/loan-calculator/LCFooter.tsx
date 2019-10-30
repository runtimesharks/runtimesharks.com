import React from "react"
import styled, { css } from "styled-components"
import { ComputeReturn } from "../../utils/loanCalculator"
import LCSummary from "./LCSummary"

export type LCFooterProps = {
  firstValues?: ComputeReturn
  secondValues?: ComputeReturn
  onAddComparison: () => void
}

const LCFooter = ({
  firstValues,
  secondValues,
  onAddComparison,
}: LCFooterProps) => {
  const hasSummary = firstValues != null && secondValues != null
  let values = {} as ComputeReturn

  if (firstValues != null && secondValues != null) {
    Object.keys(firstValues).map((k) => {
      const key = k as keyof ComputeReturn
      values[key] = firstValues[key] - secondValues[key]
    })
  }

  return (
    <Container hasSummary={hasSummary}>
      {hasSummary ? (
        <>
          <Title>Differences:</Title>
          <LCSummary values={values} />
        </>
      ) : null}
      {secondValues ? null : (
        <Button onClick={onAddComparison}>Add comparison</Button>
      )}
    </Container>
  )
}

const Container = styled.div<{ hasSummary: boolean }>`
  ${(props) =>
    props.hasSummary
      ? css`
          min-width: 300px;
        `
      : null}

  margin: 3em auto auto;
  padding-top: 1em;
`

const Title = styled.h1`
  border-bottom: 1px solid lightgray;
  text-align: center;
`

const Button = styled.button`
  display: inline-block;
  font-size: 1.5em;
  color: white;
  font-weight: bold;
  margin: auto;
`

export default LCFooter

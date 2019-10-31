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
      // Check if the object is not still empty.
      if (secondValues.total != null) {
        values[key] = secondValues[key] - firstValues[key]
      } else {
        values[key] = 0
      }
    })
  }

  return (
    <Container hasSummary={hasSummary}>
      {hasSummary ? (
        <>
          <Title>Right differences:</Title>
          <LCSummary values={values} showComparisonResults={true} />
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
  font-weight: bold;
  margin: auto;
`

export default React.memo(LCFooter)

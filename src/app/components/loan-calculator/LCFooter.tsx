import React from "react"
import styled, { css } from "styled-components"
import { ComputeReturn } from "../../utils/loanCalculator"
import LCSummary from "./LCSummary"

export type LCFooterProps = {
  firstValues: ComputeReturn
  secondValues?: ComputeReturn
  onButtonClick: () => void
}

const LCFooter = ({
  firstValues,
  secondValues,
  onButtonClick,
}: LCFooterProps) => {
  const hasSummary = secondValues != null
  let values = {} as ComputeReturn

  if (secondValues != null) {
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
      <Button hasSummary={hasSummary} onClick={onButtonClick}>
        {secondValues ? "Remove" : "Add"} comparison
      </Button>
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

const Button = styled.button<{ hasSummary: boolean }>`
  display: block;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  margin: auto;

  ${(props) =>
    props.hasSummary
      ? css`
          margin-top: 60px;
        `
      : null}
`

export default React.memo(LCFooter)

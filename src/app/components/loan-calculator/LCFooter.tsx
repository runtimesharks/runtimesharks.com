import React from "react"
import styled from "styled-components"
import { ComputeReturn } from "../../utils/loanCalculator"
import LabelValue from "./LabelValue"

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
  return (
    <Container>
      {firstValues && secondValues ? (
        <SummaryContainer>
          <LabelValue label="Loan" value={secondValues.total - firstValues.total}/>
        </SummaryContainer>
      ) : null}
      {secondValues ? null : (
        <Button onClick={onAddComparison}>Add comparison</Button>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  padding-top: 4em;
`

const SummaryContainer = styled.div`
  display: grid;
`

const Button = styled.button`
  display: inline-block;
  font-size: 1.5em;
  color: white;
  font-weight: bold;
  margin: auto;
`

export default LCFooter

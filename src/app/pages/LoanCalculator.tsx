import React, { useCallback, useState } from "react"
import styled from "styled-components"
import LCComponent from "../components/loan-calculator/LCComponent"
import LCFooter, { LCFooterProps } from "../components/loan-calculator/LCFooter"
import computeLoan, {
  ComputeParams,
  ComputeReturn,
} from "../utils/loanCalculator"

type CalculatorStyle = {
  showsComparison: boolean
}

const LoanCalculator = () => {
  const [footerProps, setFooterProps] = useState({
    firstValues: {} as ComputeReturn,
    secondValues: undefined,
  } as LCFooterProps)

  const handleComparisonClick = useCallback(() => {
    setFooterProps({
      ...footerProps,
      secondValues: {} as ComputeReturn,
    })
  }, [footerProps])

  const updateFirstValues = useCallback(
    (values: ComputeParams) => {
      setFooterProps({
        ...footerProps,
        firstValues: computeLoan(values),
      })
    },
    [footerProps.firstValues]
  )

  const updateSecondValues = useCallback(
    (values: ComputeParams) => {
      setFooterProps({
        ...footerProps,
        secondValues: computeLoan(values),
      })
    },
    [footerProps.secondValues]
  )

  const showsComparison = footerProps.secondValues != null

  return (
    <Container>
      <Calculators showsComparison={showsComparison}>
        <LCComponent onValuesChanged={updateFirstValues} show={true} />
        <LCComponent
          onValuesChanged={updateSecondValues}
          show={showsComparison}
        />
      </Calculators>
      <LCFooter onAddComparison={handleComparisonClick} {...footerProps} />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  margin-top: 2em;
`

const Calculators = styled.div<CalculatorStyle>`
  display: grid;
  margin: auto;
  grid-template-columns: ${(props) =>
    props.showsComparison ? "1fr 1fr" : "1fr"};
  grid-column-gap: 80px;
`

export default React.memo(LoanCalculator)

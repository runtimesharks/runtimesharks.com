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
    [footerProps]
  )

  const updateSecondValues = useCallback(
    (values: ComputeParams) => {
      setFooterProps({
        ...footerProps,
        secondValues: computeLoan(values),
      })
    },
    [footerProps]
  )

  const showsComparison = footerProps.secondValues != null

  return (
    <Container>
      <Title>Calculate payment schedules and compare different scenarios</Title>
      <Grid>
        <Calculators showsComparison={showsComparison}>
          <LCComponent onValuesChanged={updateFirstValues} show={true} />
          <LCComponent
            onValuesChanged={updateSecondValues}
            show={showsComparison}
          />
        </Calculators>
        <LCFooter onAddComparison={handleComparisonClick} {...footerProps} />
      </Grid>
    </Container>
  )
}

const Container = styled.div``

const Title = styled.h3`
  text-align: center;
  /* max-width: 400px; */
  margin: 1em auto;
  padding-bottom: 1em;
`

const Grid = styled.div`
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

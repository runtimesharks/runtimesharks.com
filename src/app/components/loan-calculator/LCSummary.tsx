import React from "react"
import styled from "styled-components"
import { ComputeReturn } from "../../utils/loanCalculator"
import LabelValue, { Color } from "./LabelValue"

type Props = {
  values?: ComputeReturn
  showComparisonResults?: boolean
}

const LCSummary = ({ values, showComparisonResults = false }: Props) => {
  if (values == null) {
    return null
  }

  const colorFor = (value: number, inverse: boolean = false): Color => {
    return value == 0 || !showComparisonResults
      ? "none"
      : value < 0 || inverse // A difference in "amount saved" is inverse of normal differences.
      ? "negative"
      : "positive"
  }

  const showAdditionalPayment =
    showComparisonResults ||
    values.actualMonthlyPayment != values.baseMonthlyPayment
  const showExtraPayments =
    values.actualMonthlyPaymentWithExtra != values.actualMonthlyPayment

  return (
    <Container>
      <Grid>
        {
          <LabelValue
            label={(showAdditionalPayment ? "Base m" : "M") + "onthly rate"}
            value={values.baseMonthlyPayment.format()}
            color={colorFor(values.baseMonthlyPayment)}
          />
        }
        {showAdditionalPayment ? (
          <LabelValue
            label="Actual monthly rate"
            value={values.actualMonthlyPayment.format()}
            color={colorFor(values.actualMonthlyPayment)}
          />
        ) : null}
        {showExtraPayments ? (
          <>
            <Subtotal
              label="Monthly rate extra"
              value={values.actualMonthlyPaymentWithExtra.format()}
              color={colorFor(values.actualMonthlyPayment)}
            />
            <LabelValue
              label="Extra payments"
              value={values.numberOfPaidExtraPayments.format(0)}
              color={colorFor(values.numberOfPaidExtraPayments)}
            />
            <LabelValue
              label="Total extra payment"
              value={values.valueOfPaidExtraPayments.format()}
              color={colorFor(values.valueOfPaidExtraPayments)}
            />
          </>
        ) : null}
        {values.repayDurationDifference > 0 ? (
          <>
            <Subtotal
              label="Loan fulfilled in"
              value={`${values.durationOfRepay.format(0)} months`}
              color={colorFor(values.durationOfRepay)}
            />
            <LabelValue
              label="Fullfilled earlier by"
              value={`${values.repayDurationDifference.format(0)} months`}
              color={colorFor(values.repayDurationDifference, true)}
            />
          </>
        ) : null}
        <Subtotal
          label="Overpay"
          value={`${values.percentageOfOverpay.format()}%`}
          color={colorFor(values.percentageOfOverpay)}
        />
        <LabelValue
          label="Total interest"
          value={values.totalInterest.format()}
          color={colorFor(values.totalInterest)}
        />
        <Total
          label="Total"
          value={values.total.format()}
          color={colorFor(values.total)}
        />
      </Grid>
    </Container>
  )
}

const Container = styled.div``

const Grid = styled.div`
  display: grid;
`

const Subtotal = styled(LabelValue)`
  margin-top: 0.5em;
`

const Total = styled(LabelValue)`
  font-weight: bold;
  font-size: 1.1em;
`

export default React.memo(LCSummary)

import React from "react"
import styled from "styled-components"
import { ComputeReturn } from "../../utils/loanCalculator"
import LabelValue from "./LabelValue"

type Props = {
  values?: ComputeReturn
}

const LCSummary = ({ values }: Props) => {
  if (values == null) {
    return null
  }

  const hasAdditionalPayment =
    values.actualMonthlyPayment != values.baseMonthlyPayment
  const hasExtraPayments =
    values.actualMonthlyPaymentWithExtra != values.actualMonthlyPayment

  return (
    <Container>
      <Grid>
        {
          <LabelValue
            label={(hasAdditionalPayment ? "Base m" : "M") + "onthly rate"}
            value={values.baseMonthlyPayment}
          />
        }
        {hasAdditionalPayment ? (
          <LabelValue
            label="Actual monthly rate"
            value={values.actualMonthlyPayment}
          />
        ) : null}
        {hasExtraPayments ? (
          <>
            <Subtotal
              label="Monthly rate extra"
              value={values.actualMonthlyPaymentWithExtra}
            />
            <LabelValue
              label="Extra payments"
              value={values.numberOfPaidExtraPayments}
            />
            <LabelValue
              label="Total extra payment"
              value={values.valueOfPaidExtraPayments}
            />
          </>
        ) : null}
        {values.repayDurationDifference != "0 months" ? (
          <>
            <Subtotal
              label="Loan fulfilled in"
              value={values.durationOfRepay}
            />
            <LabelValue
              label="Fullfilled earlier by"
              value={values.repayDurationDifference}
            />
          </>
        ) : null}
        <Subtotal label="Overpay" value={values.percentageOfOverpay} />
        <LabelValue label="Total interest" value={values.totalInterest} />
        <Total label="Total" value={values.total} />
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
`

export default LCSummary

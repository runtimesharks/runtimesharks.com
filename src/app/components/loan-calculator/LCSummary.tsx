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
            value={values.baseMonthlyPayment.format()}
          />
        }
        {hasAdditionalPayment ? (
          <LabelValue
            label="Actual monthly rate"
            value={values.actualMonthlyPayment.format()}
          />
        ) : null}
        {hasExtraPayments ? (
          <>
            <Subtotal
              label="Monthly rate extra"
              value={values.actualMonthlyPaymentWithExtra.format()}
            />
            <LabelValue
              label="Extra payments"
              value={values.numberOfPaidExtraPayments.format(0)}
            />
            <LabelValue
              label="Total extra payment"
              value={values.valueOfPaidExtraPayments.format()}
            />
          </>
        ) : null}
        {values.repayDurationDifference > 0 ? (
          <>
            <Subtotal
              label="Loan fulfilled in"
              value={`${values.durationOfRepay.format(0)} months`}
            />
            <LabelValue
              label="Fullfilled earlier by"
              value={`${values.repayDurationDifference.format(0)} months`}
            />
          </>
        ) : null}
        <Subtotal label="Overpay" value={`${values.percentageOfOverpay.format()}%`} />
        <LabelValue label="Total interest" value={values.totalInterest.format()} />
        <Total label="Total" value={values.total.format()} />
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

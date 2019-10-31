import React, { useCallback, useEffect, useState } from "react"
import styled from "styled-components"
import computeLoan, { ComputeParams } from "../../utils/loanCalculator"
import LabelInput from "./LabelInput"
import LCSummary from "./LCSummary"

type Props = {
  show: boolean
  onValuesChanged: (values: ComputeParams) => void
}

const LCComponent = ({ show, onValuesChanged }: Props) => {
  const [state, setState] = useState({
    loan: 550_000,
    additionalCosts: 500,
    additionalMonthlyPayment: 0,
    annualInterestRate: 5.36,
    period: 76,
    extraPayments: {
      limit: 0,
      frequency: 0,
      value: 0,
    },
  } as ComputeParams)
  const [hasExtraPayments, setHasExtraPayments] = useState(false)

  const handleLoanChange = useCallback(
    (e: any) => {
      const value = parseInt(e.target.value, 10)

      setState({
        ...state,
        loan: value ? value : state.loan,
      })
    },
    [state]
  )

  const handleDurationChange = useCallback(
    (e: any) => {
      const value = parseInt(e.target.value, 10)

      setState({
        ...state,
        period: value ? value : state.period,
      })
    },
    [state]
  )

  const handleInterestChange = useCallback(
    (e: any) => {
      const value = parseFloat(e.target.value)

      setState({
        ...state,
        annualInterestRate: value ? value : state.annualInterestRate,
      })
    },
    [state]
  )

  const handleAdditionalCostsChange = useCallback(
    (e: any) => {
      const value = parseFloat(e.target.value)

      setState({
        ...state,
        additionalCosts: value ? value : state.additionalCosts,
      })
    },
    [state]
  )

  const handleAdditionalMonthlyPaymentChange = useCallback(
    (e: any) => {
      const value = parseFloat(e.target.value)

      setState({
        ...state,
        additionalMonthlyPayment: value
          ? value
          : state.additionalMonthlyPayment,
      })
    },
    [state]
  )

  const handleOccasionalExtraPaymentChange = useCallback(
    (e: any) => {
      setHasExtraPayments(e.target.checked)

      if (e.target.checked) {
        return
      }

      setState({
        ...state,
        extraPayments: {
          frequency: 0,
          value: 0,
          limit: 0,
        },
      })
    },
    [hasExtraPayments]
  )

  const handleExtraValueChange = useCallback(
    (e: any) => {
      const value = parseFloat(e.target.value)

      setState({
        ...state,
        extraPayments: {
          ...state.extraPayments,
          value: value ? value : state.extraPayments.value,
        },
      })
    },
    [state]
  )

  const handleFrequencyChange = useCallback(
    (e: any) => {
      const value = parseInt(e.target.value, 10)

      setState({
        ...state,
        extraPayments: {
          ...state.extraPayments,
          frequency: value ? value : state.extraPayments.frequency,
        },
      })
    },
    [state]
  )

  const handleLimitChange = useCallback(
    (e: any) => {
      const value = parseInt(e.target.value, 10)

      setState({
        ...state,
        extraPayments: {
          ...state.extraPayments,
          limit: value ? value : state.extraPayments.limit,
        },
      })
    },
    [state]
  )

  useEffect(() => {
    if (!show) {
      return
    }

    onValuesChanged(state)
  }, [state, show])

  return show ? (
    <Container>
      <LabelInput
        label="Loan"
        onChange={handleLoanChange}
        defaultValue={state.loan}
        description="The sum you intend to loan."
      />
      <LabelInput
        label="Duration"
        onChange={handleDurationChange}
        defaultValue={state.period}
        description="The duration of the loan, in months."
      />
      <LabelInput
        label="Annual interest rate"
        onChange={handleInterestChange}
        defaultValue={state.annualInterestRate}
        description="The annual interest rate, as a percentage."
      />
      <LabelInput
        label="Additional costs"
        onChange={handleAdditionalCostsChange}
        defaultValue={state.additionalCosts}
        description="One-time costs, like comissions."
      />
      <LabelInput
        label="Monthly extra payment"
        onChange={handleAdditionalMonthlyPaymentChange}
        defaultValue={state.additionalMonthlyPayment}
        description="A sum you intend to pay extra, each month."
      />
      <LabelInput
        label="Occasional extra payments?"
        type="checkbox"
        onChange={handleOccasionalExtraPaymentChange}
        defaultValue={false}
        description="An additional sum you intend to pay extra, every now and then."
      />
      {hasExtraPayments ? (
        <>
          <PaddedLabelInput
            label="Value"
            onChange={handleExtraValueChange}
            defaultValue={state.extraPayments.value}
            description="The amount you intend to pay extra."
          />
          <PaddedLabelInput
            label="Frequency"
            onChange={handleFrequencyChange}
            defaultValue={state.extraPayments.frequency}
            description="The frequency of payments. 1 for monthly."
          />
          <PaddedLabelInput
            label="Limit"
            onChange={handleLimitChange}
            defaultValue={state.extraPayments.limit}
            description="The number of extra payments you intend to pay."
          />
        </>
      ) : null}
      <Footer>
        <LCSummary values={computeLoan(state)} />
      </Footer>
    </Container>
  ) : null
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 12px;
`

const Footer = styled.div`
  border-top: 1px solid lightgray;
  margin-top: 1.5em;
  padding-top: 0.75em;
  display: grid;
`

const PaddedLabelInput = styled(LabelInput)`
  padding-left: 25px;
`

export default React.memo(LCComponent)

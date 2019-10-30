import React, { useEffect, useState } from "react"
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
        onChange={(e: any) => {
          setState({
            ...state,
            loan: parseInt(e.target.value, 10) || state.loan,
          })
        }}
        defaultValue={state.loan}
        description="The sum you intend to loan."
      />
      <LabelInput
        label="Duration"
        onChange={(e: any) => {
          setState({
            ...state,
            period: parseInt(e.target.value, 10) || state.period,
          })
        }}
        defaultValue={state.period}
        description="The duration of the loan, in months."
      />
      <LabelInput
        label="Annual interest rate"
        onChange={(e: any) => {
          setState({
            ...state,
            annualInterestRate: parseFloat(e.target.value),
          })
        }}
        defaultValue={state.annualInterestRate}
        description="The annual interest rate, as a percentage."
      />
      <LabelInput
        label="Additional costs"
        onChange={(e: any) => {
          setState({
            ...state,
            additionalCosts: parseFloat(e.target.value),
          })
        }}
        defaultValue={state.additionalCosts}
        description="One-time costs, like comissions."
      />
      <LabelInput
        label="Monthly extra payment"
        onChange={(e: any) => {
          setState({
            ...state,
            additionalMonthlyPayment: parseFloat(e.target.value),
          })
        }}
        defaultValue={state.additionalMonthlyPayment}
        description="A sum you intend to pay extra, each month."
      />
      <LabelInput
        label="Occasional extra payments?"
        type="checkbox"
        onChange={(e: any) => {
          setHasExtraPayments(e.target.checked)
        }}
        defaultValue={false}
        description="An additional sum you intend to pay extra, every now and then."
      />
      {hasExtraPayments ? (
        <>
          <PaddedLabelInput
            label="Value"
            onChange={(e: any) => {
              setState({
                ...state,
                extraPayments: {
                  ...state.extraPayments,
                  value: parseFloat(e.target.value),
                },
              })
            }}
            defaultValue={state.extraPayments.value}
            description="The amount you intend to pay extra."
          />
          <PaddedLabelInput
            label="Frequency"
            onChange={(e: any) => {
              setState({
                ...state,
                extraPayments: {
                  ...state.extraPayments,
                  frequency: parseInt(e.target.value, 10),
                },
              })
            }}
            defaultValue={state.extraPayments.frequency}
            description="The frequency of payments. 1 for monthly."
          />
          <PaddedLabelInput
            label="Limit"
            onChange={(e: any) => {
              setState({
                ...state,
                extraPayments: {
                  ...state.extraPayments,
                  limit: parseInt(e.target.value, 10),
                },
              })
            }}
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

const Container = styled.div``

const Footer = styled.div`
  border-top: 1px solid lightgray;
  margin-top: 1.5em;
  padding-top: 0.75em;
  display: grid;
`

const PaddedLabelInput = styled(LabelInput)`
  padding-left: 25px;
`

export default LCComponent

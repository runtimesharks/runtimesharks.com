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
      />
      <LabelInput
        label="Occasional extra payments?"
        type="checkbox"
        onChange={(e: any) => {
          setHasExtraPayments(e.target.checked)
        }}
        defaultValue={false}
      />
      {hasExtraPayments ? (
        <>
          <LabelInput
            label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Value"
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
          />
          <LabelInput
            label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Frequency"
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
          />
          <LabelInput
            label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Limit"
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

export default LCComponent

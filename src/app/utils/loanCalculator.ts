declare global {
  interface Number {
    toDigits: (digits: number) => number
    format: (digits?: number) => string
  }
}

Number.prototype.toDigits = function(digits: number): number {
  return parseFloat(this.toFixed(digits))
}

Number.prototype.format = function(digits: number = 2) {
  return this.toLocaleString(undefined, {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  })
}

/*
 * type - when the payments are due:
 *        0: end of the period, e.g. end of month (default)
 *        1: beginning of period
 */
type PMTParams = {
  monthlyInterestRate: number
  period: number
  loan: number
  residualValue?: number
  type?: number
}

type ExtraPayments = {
  limit: number
  value: number
  frequency: number
}

export type ComputeParams = {
  period: number
  loan: number
  additionalCosts: number
  annualInterestRate: number
  additionalMonthlyPayment: number
  extraPayments: ExtraPayments
}

export type ComputeReturn = {
  baseMonthlyPayment: string
  actualMonthlyPayment: string
  actualMonthlyPaymentWithExtra: string
  total: string
  totalInterest: string
  percentageOfOverpay: string
  durationOfRepay: string
  numberOfPaidExtraPayments: string
  valueOfPaidExtraPayments: string
  repayDurationDifference: string
}

const PMT = ({
  monthlyInterestRate: interestRate,
  period,
  loan,
  residualValue = 0,
  type = 0,
}: PMTParams) => {
  if (interestRate === 0) {
    return (loan + residualValue) / period
  }

  const loanIf = Math.pow(1 + interestRate, period)
  let pmt = (interestRate * loan * (loanIf + residualValue)) / (loanIf - 1)

  if (type === 1) {
    pmt /= 1 + interestRate
  }

  return pmt
}

const computeLoan = ({
  period,
  loan,
  additionalCosts,
  annualInterestRate,
  additionalMonthlyPayment,
  extraPayments,
}: ComputeParams): ComputeReturn => {
  const monthlyInterestRate = (annualInterestRate * 0.01) / 12
  const monthlyPayment = PMT({
    monthlyInterestRate,
    period,
    loan,
  })
  const actualMonthlyPayment = monthlyPayment + additionalMonthlyPayment

  let remainingLoan = loan
  let total = loan + additionalCosts
  let totalInterest = 0
  let numberOfPaidExtraPayments = 0
  let valueOfPaidExtraPayments = 0
  let durationOfRepay = 0

  while (durationOfRepay < period && remainingLoan > 0) {
    const monthlyInterest = remainingLoan * monthlyInterestRate
    let principal = actualMonthlyPayment - monthlyInterest
    // Do an extra payment if:
    // - the value is greater than 0
    const hasExtraPayments = extraPayments.value > 0
    // - the limit is 0; or
    // - we haven't reached the limit.
    const hasExtraPaymentsRemaining =
      extraPayments.limit < 1 || numberOfPaidExtraPayments < extraPayments.limit
    // - the current month divides exactly with the frequency; this includes a frequency of 1.
    const isExtraPaymentMonth = durationOfRepay % extraPayments.frequency == 0

    if (hasExtraPayments && hasExtraPaymentsRemaining && isExtraPaymentMonth) {
      numberOfPaidExtraPayments += 1
      valueOfPaidExtraPayments += extraPayments.value
      principal += extraPayments.value
    }

    remainingLoan -= principal
    totalInterest += monthlyInterest

    durationOfRepay += 1
  }

  total += totalInterest

  // If there are no extra payments, ignore any value passed in.
  const actualMonthlyPaymentWithExtra =
    extraPayments.value > 0
      ? actualMonthlyPayment + extraPayments.value
      : actualMonthlyPayment
  const percentageOfOverpay = (totalInterest / Math.max(0.01, loan)) * 100
  const repayDurationDifference = period - durationOfRepay

  return {
    baseMonthlyPayment: monthlyPayment.format(),
    actualMonthlyPayment: actualMonthlyPayment.format(),
    actualMonthlyPaymentWithExtra: actualMonthlyPaymentWithExtra.format(),
    total: total.format(),
    totalInterest: totalInterest.format(),
    percentageOfOverpay: `${percentageOfOverpay.format()}%`,
    durationOfRepay: `${durationOfRepay.format(0)} months`,
    numberOfPaidExtraPayments: numberOfPaidExtraPayments.format(0),
    valueOfPaidExtraPayments: valueOfPaidExtraPayments.format(),
    repayDurationDifference: `${repayDurationDifference.format(0)} months`,
  }
}

export default computeLoan

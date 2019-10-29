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
  count: number
  value: number
  interval: number
}

type ComputeParams = {
  period: number
  loan: number
  additionalCosts: number
  annualInterestRate: number
  additionalMonthlyPayment: number
  extraPayments: ExtraPayments
}

type ComputeReturn = {
  baseMonthlyPayment: string
  actualMonthlyPayment: string
  actualMonthlyPaymentWithExtra: string
  total: string
  totalInterest: string
  percentageOfOverpay: string
  durationOfRepay: string
  numberOfPaidExtraPayments: string
  valueOfPaidExtraPayments: string
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
  extraPayments
}: ComputeParams): ComputeReturn => {
  const monthlyInterestRate = (annualInterestRate * 0.01) / 12
  const monthlyPayment = PMT({ monthlyInterestRate, period, loan })
  const actualMonthlyPayment = monthlyPayment + additionalMonthlyPayment

  let remainingLoan = loan
  let remainingPeriod = period
  let total = loan + additionalCosts
  let totalInterest = 0
  let numberOfPaidExtraPayments = 0
  let valueOfPaidExtraPayments = 0

  while (remainingPeriod > 0 && remainingLoan > 0) {
    const monthlyInterest = remainingLoan * monthlyInterestRate
    let principal = actualMonthlyPayment - monthlyInterest

    if (
      numberOfPaidExtraPayments < extraPayments.count &&
      extraPayments.value > 0 &&
      Math.floor(1 + Math.random() * Math.abs(extraPayments.interval)) === 1
    ) {
      numberOfPaidExtraPayments += 1
      valueOfPaidExtraPayments += extraPayments.value
      principal += extraPayments.value
    }

    remainingLoan -= principal
    totalInterest += monthlyInterest

    remainingPeriod -= 1
  }

  const percentageOfOverpay = (totalInterest / loan) * 100
  const durationOfRepay = period - remainingPeriod

  return {
    baseMonthlyPayment: monthlyPayment.format(),
    actualMonthlyPayment: actualMonthlyPayment.format(),
    actualMonthlyPaymentWithExtra: (
      actualMonthlyPayment + extraPayments.value
    ).format(),
    total: total.format(),
    totalInterest: totalInterest.format(),
    percentageOfOverpay: `${percentageOfOverpay.format()}%`,
    durationOfRepay: `${durationOfRepay.format(0)} months`,
    numberOfPaidExtraPayments: numberOfPaidExtraPayments.format(0),
    valueOfPaidExtraPayments: valueOfPaidExtraPayments.format(),
  }
}

export default computeLoan

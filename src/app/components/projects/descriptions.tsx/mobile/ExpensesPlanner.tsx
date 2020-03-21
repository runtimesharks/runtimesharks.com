import React from "react"
import Project from "../../../../pages/Project"
import AnimatedContainer from "../../../AnimatedContainer"

const ExpensesPlanner = (props: any) => (
  <Project {...props} centered>
    <AnimatedContainer>
      Helps you keep track of your upcoming expenses. Easily set up your
      upcoming expenses, their recurring intervals, a reminder, and how often
      you'd like to be reminded.
    </AnimatedContainer>
  </Project>
)

export default ExpensesPlanner

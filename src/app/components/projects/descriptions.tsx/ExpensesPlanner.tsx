import React from "react"
import Project from "../../../pages/Project"
import ProjectContainer from "../../containers/ProjectContainer"

const ExpensesPlanner = (props: any) => (
	<Project {...props} centered>
		<ProjectContainer>
			Helps you keep track of your upcoming expenses. Easily set up your
			upcoming expenses, their recurring intervals, a reminder, and how often
			you'd like to be reminded. <em>[Discontinued as of 2014]</em>
		</ProjectContainer>
	</Project>
)

export default ExpensesPlanner

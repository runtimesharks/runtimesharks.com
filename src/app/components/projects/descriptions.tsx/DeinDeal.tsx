import React from "react"
import Project from "../../../pages/Project"
import ProjectContainer from "../../containers/ProjectContainer"

const DeinDeal = (props: any) => (
	<Project {...props} centered>
		<ProjectContainer>
			Between 2013 and 2017, Roland has worked for{" "}
			<a href="https://deindeal.ch">DeinDeal</a>, one of the dominating
			flash-sales companies in Switzerland &amp; part of{" "}
			<a href="http://ringier.com">Ringier AG</a>, and starting with 2014 he
			took the role of iOS Lead.
		</ProjectContainer>
	</Project>
)

export default DeinDeal

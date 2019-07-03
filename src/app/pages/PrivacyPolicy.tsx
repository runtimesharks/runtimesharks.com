import React from "react"
import Helmet from "react-helmet"
import { Route, Switch } from "react-router"
import AnimatedContainer from "../components/AnimatedContainer"
import Content from "../components/Content"
import ChallengeBeat from "../components/privacy-policy/ChallengeBeat"
import Goalee from "../components/privacy-policy/Goalee"
import IdeaTrackerr from "../components/privacy-policy/IdeaTrackerr"
import RuntimeSharks from "../components/privacy-policy/RuntimeSharks"
import TravelStories from "../components/privacy-policy/TravelStories"
import TravelStoriesTerms from "../components/terms-and-conditions/TravelStories"

const PrivacyPolicy = () => (
	<>
		<Helmet>
			<meta name="robots" content="none" />
		</Helmet>
		<AnimatedContainer>
			<Content>
				<Switch>
					<Route path="/privacy/runtimesharks" component={RuntimeSharks} />
					<Route path="/privacy/challengebeat" component={ChallengeBeat} />
					<Route path="/privacy/travelstories" component={TravelStories} />
					<Route path="/privacy/goalee" component={Goalee} />
					<Route path="/privacy/idea-tracker" component={IdeaTrackerr} />
					<Route
						path="/terms-and-conditions/travelstories"
						component={TravelStoriesTerms}
					/>
				</Switch>
			</Content>
		</AnimatedContainer>
	</>
)

export default PrivacyPolicy

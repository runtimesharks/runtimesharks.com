import React from "react"
import { Route, Switch } from "react-router"
import AnimatedContainer from "../components/AnimatedContainer"
import Content from "../components/Content"
import ChallengeBeat from "../components/privacy-policy/ChallengeBeat"
import Goalee from "../components/privacy-policy/Goalee"
import IdeaTrackerr from "../components/privacy-policy/IdeaTrackerr"
import RuntimeSharks from "../components/privacy-policy/RuntimeSharks"
import Helmet from "../utils/Helmet"

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
          <Route path="/privacy/goalee" component={Goalee} />
          <Route path="/privacy/idea-tracker" component={IdeaTrackerr} />
        </Switch>
      </Content>
    </AnimatedContainer>
  </>
)

export default PrivacyPolicy

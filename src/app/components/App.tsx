import React, { useEffect } from "react"
import Router from "../routes/Router"
import { GlobalStyle } from "../theme/globalStyle"
import LocationContext from "../utils/LocationContext"
import Footer from "./Footer"
import Header from "./Header"

interface Props {
  ssrLocation?: string
}

const App = ({ ssrLocation }: Props) => {
  useEffect(() => {
    // @ts-ignore
    Paddle.Setup({ vendor: 39394 })

    const visible = "visible"
    const fixed = "fixed"

    const handleScroll = () => {
      const passedFixedTreshold = window.scrollY > 103
      const navPadding = document.getElementsByClassName("nav-padding")[0]
      const nav = document.getElementsByClassName("navigation")[0]

      if (passedFixedTreshold) {
        if (navPadding.classList.contains(visible) === false) {
          navPadding.classList.add(visible)
        }

        if (nav.classList.contains(fixed) === false) {
          nav.classList.add(fixed)
        }
      } else if (passedFixedTreshold === false) {
        if (navPadding.classList.contains(visible)) {
          navPadding.classList.remove(visible)
        }

        if (nav.classList.contains(fixed)) {
          nav.classList.remove(fixed)
        }
      }
    }

    document.addEventListener("scroll", handleScroll)

    return () => document.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <GlobalStyle />
      <Header />
      <LocationContext.Provider value={ssrLocation}>
        <Router />
      </LocationContext.Provider>
      <Footer />
    </>
  )
}

export default App

document.addEventListener("scroll", () => {
	const passedFixedTreshold = window.scrollY > 122
	const navPadding = document.getElementsByClassName("nav-padding")[0]
	const nav = document.getElementsByClassName("navigation")[0]

	if (passedFixedTreshold) {
		if (!navPadding.classList.contains("visible")) {
			navPadding.classList.add("visible")
		}
		if (!nav.classList.contains("fixed")) {
			nav.classList.add("fixed")
		}
	} else if (!passedFixedTreshold) {
		if (navPadding.classList.contains("visible")) {
			navPadding.classList.remove("visible")
		}
		if (nav.classList.contains("fixed")) {
			nav.classList.remove("fixed")
		}
	}
})

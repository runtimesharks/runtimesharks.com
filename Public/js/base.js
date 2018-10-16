document.addEventListener(
	"scroll",
	() => {
		const passedFixedTreshold = window.scrollY > 121
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
	},
	false
)

window.addEventListener(
	"load",
	() => {
		const path = window.location.pathname
		const navItems = Array.from(document.getElementsByClassName("nav-item"))

		navItems.forEach((navItem) => {
			const buttons = Array.from(navItem.getElementsByTagName("button"))
			buttons.forEach((button) => button.classList.remove("selected"))
		})
		navItems
			.filter((navItem) => navItem.getAttribute("href") == path)
			.forEach((navItem) => {
				const buttons = Array.from(navItem.getElementsByTagName("button"))
				buttons.forEach((button) => button.classList.add("selected"))
			})
	},
	false
)

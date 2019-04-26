import React from "react"

interface Props {
	section: "mentoring" | "consulting"
}

const GetInTouch = ({ section }: Props) => (
	<div className="centered side-padded">
		If you're interested, please{" "}
		<a href={`mailto:${section}@runtimesharks.com`}>get in touch</a>; we'd love
		to talk.
	</div>
)

export default GetInTouch

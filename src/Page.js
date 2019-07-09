import React from "react"

function Page(props) {
	return (
		<article className="pageText">
			{props.pageText}
		</article>
	)	
}

export default Page
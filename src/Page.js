import React from "react"

function Page(props) {
	return (
		<main>
			<article className="pageText">
				<h1 className="pageTitle">{props.title}</h1>
				{props.pageText}
			</article>
		</main>	
	)	
}

export default Page
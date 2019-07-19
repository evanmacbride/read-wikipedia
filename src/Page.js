import React from "react"

function Page(props) {
	return (
		<article className="pageText">
			<h1 className="pageTitle">{props.title}</h1>
			{props.pageText}
			<footer className="pageFooter">
				Read more at <a href={props.pageLink}>Wikipedia.org</a>.
			</footer>
		</article>
	)	
}

export default Page
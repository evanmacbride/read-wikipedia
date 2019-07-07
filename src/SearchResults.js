import React from "react"

function SearchResults(props) {
	return (
		<main>
			<section className="searchResults">
				<h1 className="pageTitle">{props.title}</h1>
				{props.results}
			</section>
		</main>	
	)	
}

export default SearchResults
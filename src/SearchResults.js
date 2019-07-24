import React from "react"

class SearchResults extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(event) {
		//this.props.onCardClick(event.target.value.data-pageid);
		console.log(event.target.getAttribute("data-pageid"));
		//console.log(event.target.class);
	}
	
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	
	render() {
		return (
			<section className="searchResults">
				<h1 className="pageTitle">{this.props.title}</h1>
				{this.props.results}
				<nav className="resultsNav">
					<button>
						<svg className="loadPrevious arrowBtn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3.528 5.362">
							<path d="M.847 2.681l2.68 1.92v.761L0 2.85v-.338L3.528 0v.762z"/>
						</svg>Previous
					</button>
					<button>Next
						<svg className="loadNext arrowBtn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3.528 5.362">
							<path d="M2.681 2.681L0 .762V0l3.528 2.512v.338L0 5.362V4.6z"/>
						</svg>
					</button>
				</nav>
			</section>
		)
	}	
}

export default SearchResults
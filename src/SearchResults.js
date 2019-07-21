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
			</section>
		)
	}	
}

export default SearchResults
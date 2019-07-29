import React from "react"

const RESULTS_PER_PAGE = 20;

class SearchResults extends React.Component {
	constructor(props) {
		super(props);
		this.handleNextClick = this.handleNextClick.bind(this);
		this.handlePreviousClick = this.handlePreviousClick.bind(this);
	}
	
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	
	handleNextClick(event) {
		//this.setState({offset: this.props.offset + 20});
		this.props.onNextClick(this.props.offset, 1);
	}
	
	handlePreviousClick(event) {
		this.props.onNextClick(this.props.offset, -1);
	}
	
	render() {
		const navigation = (
				<nav className="resultsNav">
					{this.props.offset - RESULTS_PER_PAGE >= 0 &&
					(<button title="Previous search results" onClick={this.handlePreviousClick}>
						<svg className="loadPrevious arrowBtn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3.528 5.362">
							<path d="M.847 2.681l2.68 1.92v.761L0 2.85v-.338L3.528 0v.762z"/>
						</svg>Prev
					</button>)}
					{this.props.offset + RESULTS_PER_PAGE <= this.props.totalHits && 
					(<button title="Next search results" onClick={this.handleNextClick}>Next
						<svg className="loadNext arrowBtn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3.528 5.362">
							<path d="M2.681 2.681L0 .762V0l3.528 2.512v.338L0 5.362V4.6z"/>
						</svg>
					</button>)}
				</nav>
			);
			
		return (
			<section className="searchResults">
				<h1 className="pageTitle">{this.props.title}<br/>{this.props.subTitle}</h1>
				{this.props.results}
				{this.props.results[0].type && navigation}
			</section>
		)
	}	
}

export default SearchResults
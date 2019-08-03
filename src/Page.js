import React from "react"
import JumpToTop from "./JumpToTop"

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.handleShowTableClick = this.handleShowTableClick.bind(this);
	}

	componentDidMount() {
		window.scrollTo(0, 0);
	}
	
	handleShowTableClick(event) {
		this.props.onShowTableClick();
	}
	
	render() {
		// Only render the table of contents if its length is greater than 1.
		return (
			<main>
				<article className="pageText">
					<header className="pageHeader">
						<h1 className="pageTitle">{this.props.title}</h1>
						{(this.props.tableOfContents && this.props.tableOfContents.length > 1) && 
						(<nav className="contentsTable">
							<h2 className="contentsTableTitle">Table of Contents<button 
								title="Toggle table of contents"
								onClick={this.handleShowTableClick}
									>
									<svg className="tableCaret" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.362 3.528">
										<path d="M2.681 2.681L.762.001H0l2.512 3.527h.338L5.362 0H4.6z"/>
									</svg>
								</button>
							</h2>
							<ul className="tableOfContents">
								{this.props.showContentsList && this.props.tableOfContents}
							</ul>
						</nav>)}
					</header>
					{this.props.pageText}
					<footer className="pageFooter">
						Read more at <a href={this.props.pageLink}>Wikipedia.org</a>.
					</footer>
				</article>
			<JumpToTop showJumpButton={this.props.showJumpButton} />
			</main>
		)
	}
}

export default Page
import React from "react"

class Page extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		window.scrollTo(0, 0);
	}
	
	render() {
		return (
			<article className="pageText">
				<header className="pageHeader">
					<h1 className="pageTitle">{this.props.title}</h1>
					<nav className="contentsTable">
						<h2 className="contentsTableTitle">Table of Contents V</h2>
						<ul className="tableOfContents">
							{this.props.tableOfContents}
						</ul>
					</nav>
				</header>
				<div className="pageTextWrap">
					{this.props.pageText}
				</div>
				<footer className="pageFooter">
					Read more at <a href={this.props.pageLink}>Wikipedia.org</a>.
				</footer>
			</article>
		)
	}
}

export default Page
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
				<h1 className="pageTitle">{this.props.title}</h1>
				{this.props.pageText}
				<footer className="pageFooter">
					Read more at <a href={this.props.pageLink}>Wikipedia.org</a>.
				</footer>
			</article>
		)
	}
}

export default Page
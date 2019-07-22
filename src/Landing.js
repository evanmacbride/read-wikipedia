import React from "react"

class Landing extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(event) {
		this.props.onFormChange(event.target.value);
	}
	
	handleSubmit(event) {
		this.props.onFormSubmit(event.target.value);
		event.preventDefault();
	}
	
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	
	render() {
		return (
			<section className="landing">
				<div className="landingWrap">
					<h1 className="landingLogo">
						<span className="logoWordRead">Read</span><br/>
						<span className="logoWordWiki">Wiki</span><br/>
						<span className="logoWordPedia">Pedia</span>
					</h1>
					<p className="landingCopy">The simple, text-only Wikipedia reader</p>
				</div>
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.handleChange} />
					<button>
						<svg className="searchIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<title>Search</title>
							<path data-name="search" d="M23.5 20.4l-5.7-5.7a9.5 9.5 0 1 0-2.8 2.8l5.7 5.7a1 1 0 0 0 1.4 0l1.4-1.4A1 1 0 0 0 23.5 20.4ZM9.8 15a5.5 5.5 0 1 1 5.5-5.5A5.5 5.5 0 0 1 9.8 15Z"/>
						</svg>
					</button>
				</form>
			</section>
		)
	}
}

export default Landing
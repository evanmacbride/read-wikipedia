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
					<button>Search</button>
				</form>
			</section>
		)
	}
}

export default Landing
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
	
	render() {
		return (
			<section className="landing">
				<div className="landingWrap">
					<h1 className="landingLogo">Read<br/>Wiki<br/>Pedia</h1>
					<p className="landingCopy">A text-only Wikipedia reader designed for simplicity and readability</p>
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
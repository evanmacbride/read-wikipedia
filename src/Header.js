import React from "react"

class Header extends React.Component {
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
			<header className="banner">
				<h1><abbr title="Read Wikipedia">RWP</abbr></h1>
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.handleChange} />
					<button>Search</button>
				</form>
			</header>
		)
	}
}

export default Header
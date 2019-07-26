import React from "react"

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(event) {
		this.props.onFormChange(event.target.value);
	}
	
	handleClick(event) {
		this.props.onLogoClick();
	}
	
	handleSubmit(event) {
		//this.props.onFormSubmit(event.target.value);
		this.props.onFormSubmit(this.props.offset, 0);
		console.log('Hello again!');
		event.preventDefault();
	}
	
	render() {
		return (
			<header className="banner">
				<h1 className="logo" onClick={this.handleClick}>Read<br/>Wiki<br/>Pedia</h1>
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.handleChange} />
					<button>
						<svg className="searchIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<title>Search</title>
							<path data-name="search" d="M23.5 20.4l-5.7-5.7a9.5 9.5 0 1 0-2.8 2.8l5.7 5.7a1 1 0 0 0 1.4 0l1.4-1.4A1 1 0 0 0 23.5 20.4ZM9.8 15a5.5 5.5 0 1 1 5.5-5.5A5.5 5.5 0 0 1 9.8 15Z"/>
						</svg>
					</button>
				</form>
			</header>
		)
	}
}

export default Header
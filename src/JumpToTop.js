import React from "react"

class JumpToTop extends React.Component {
	constructor(props){
		super(props);
	}
	
	render() {
		return (
			<div>
			{this.props.showJumpButton &&
			<button 
				className="jumpTop"
				onClick={() => window.scrollTo(0, 0)}
				><svg className="arrowBtn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.362 3.528">
					<path d="M2.681.847L.762 3.527H0L2.512 0h.338l2.512 3.528H4.6z"/>
				</svg>
			</button>
			}
			</div>
		);
	}
}

export default JumpToTop
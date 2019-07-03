import React from "react"
import Page from "./Page"
import Header from "./Header"

// Find the asset that includes the query name in its title. If no
// asset contains the query name, return the first one in the array.
/*function findMainAsset(assetTitleArray, query) {
	for (let i = 0; i < assetTitleArray.length; i++) {
		if (assetTitleArray[i].includes(query)) {
			return assetTitleArray[i];
		}
	}
	return assetTitleArray[0];
}*/

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			pageText: null,
			query: null,
			title: null
		};
		this.handleFormChange = this.handleFormChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		
	}
	
	/*handleFormSubmit(event) {
		event.preventDefault();
		this.setState({
			query: event.target.value
		});
	}*/
	
	handleFormChange(text) {
		this.setState({
			query: text
		});		
	}
	
	handleFormSubmit() {
		//this.setState({query: query});
		console.log(this.state.query);
		fetch("https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts&titles=" + 
			this.state.query + "&format=json&redirects&explaintext")
			.then(response => response.json())
			.then(response => {
				// Get the title
				this.setState({title: Object.values(response.query.pages)[0].title});
				// Process the text.
				
				// Restore newlines lost by ignoring footnotes.
				let responseText = Object.values(response.query.pages)[0].extract;
				responseText = responseText.replace(/([a-z0-9])\.([A-Z])/g,'$1\n$2');
				
				
				// Use booleans to apply appropriate classes to set margins
				// to keep the baseline grid before and after h 
				// tags maintained.
				let beneathH3 = false;
				let beneathP = false;
				
				// Use lastTag and deleteList to detect identical adjacent h
				// tags and flag them for removal. All but the last of a set
				// of identical h tags would be a header for an empty section.
				let lastTag = '';
				let deleteList = [];
				
				// Use breaklist to catch header text that indicates the main
				// text has ended.
				const breakList = ["== GALLERY ==", "== NOTES ==", 
					"== REFERENCES ==",	"== EXTERNAL LINKS ==", "== SEE ALSO =="];
				const breakPoints = [];
				
				let textArray = responseText.split(/[\r\n]+/).map((text, index) => {
					
					// Ignore text that's all whitespace.
					text = text.trim();
					if (breakList.indexOf(text.toUpperCase()) > -1) {
						breakPoints.push(index);
					}
					if (text === "") {
						return null;
					}
					else if (text.includes("====")) {
						
						// Catch identical adjacent h tags
						if (lastTag === "h4") {
							deleteList.push(index - 1);
						}
						lastTag = "h4";
						
						// Remove old formatting and apply new h tag
						const find = "====";
						const re = new RegExp(find, 'g');
						text = text.replace(re, '').trim();
						
						// Apply appropriate class for proper 
						// baseline alignment
						beneathH3 = false;
						if (beneathP) {
							beneathP = false;
							return <h4 className="beneathP" key={index}>{text}</h4>;
						}
						return <h4 key={index}>{text}</h4>;
					}
					else if (text.includes("===")) {
						if (lastTag === "h3") {
							deleteList.push(index - 1);
						}
						lastTag = "h3";
						const find = "===";
						const re = new RegExp(find, 'g');
						text = text.replace(re, '').trim();
						beneathH3 = true;
						beneathP = false;
						return <h3 key={index}>{text}</h3>;						
					}
					else if (text.includes("==")) {
						if (lastTag === "h2") {
							deleteList.push(index - 1);
						}
						lastTag = "h2";
						const find = "==";
						const re = new RegExp(find, 'g');
						text = text.replace(re, '').trim();
						return <h2 key={index}>{text}</h2>;						
					}
					lastTag = "p";
					beneathP = true;
					if (beneathH3) {
						beneathH3 = false;
						return <p className="beneathH3" key={index}>{text}</p>;
					}
					return <p key={index}>{text}</p>;
				});
					
				// Remove text after first breakpoint
				textArray = textArray.slice(0, breakPoints[0]);
				
				// Go back and remove headers for empty sections.
				for (let i = 0; i < deleteList.length; i++) {
					textArray.splice(deleteList[i], 1);
				}
				this.setState({
					pageText: textArray
				})
				console.log(this.state.pageText);
			}
		);
	}
	
	render() {
		return (
			<div>
				<Header 
					onFormChange={this.handleFormChange}
					onFormSubmit={this.handleFormSubmit}
				/>
				<Page 
					title={this.state.title}
					pageText={this.state.pageText} 
				/>
			</div>
		)
	}
}

export default App
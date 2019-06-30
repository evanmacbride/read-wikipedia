import React from "react"
//import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

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
			pageText: [],
			query: 'Philadelphia',
			/*imageUrl: '',
			imageTitle: ''*/
		};
	}
	
	// Fetch the page text as extracts with the prop=extracts parameter. 
	// Use explaintext= to remove HTML tags. split() separates the text
	// into an array by returns and newlines.
	//
	// TODO: Remove empty '()' that contained removed pronunciation 
	// guides. Make sure periods don't elide into next sentence.
	//
	componentDidMount() {
		fetch("https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts&titles=" + 
			this.state.query + "&format=json&explaintext=")
			.then(response => response.json())
			.then(response => {
				//console.log(Object.values(response.query.pages)[0].extract);
				let responseText = Object.values(response.query.pages)[0].extract;
				responseText = responseText.replace(/([a-z0-9])\.([A-Z])/g,'$1\n$2');
				// Process the text.
				
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
				
				//let textArray = Object.values(response.query.pages)[0].extract.split(/[\r\n]+/)
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

			});
		// Fetch all image titles.
		/*fetch("https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=images&titles=" + 
			this.state.query + "&format=json")
			.then(response => response.json())
			.then(response => {
				const imgTitleArray = Object.values(response.query.pages)[0].images
					.map(item => item.title);
				const mainImgTitle = findMainAsset(imgTitleArray, this.state.query);
				return mainImgTitle;
				})
			.then(title =>  {
				fetch("https://en.wikipedia.org/w/api.php?origin=*&action=query&titles=" + 
				title + "&prop=imageinfo&iiprop=url&format=json")
				.then(response => response.json())
				.then(response => {
					const url = Object.values(response.query.pages)[0].imageinfo[0].url;
					this.setState({imgUrl: url, imageTitle: title})
					})
				}
			)*/
	}
	
	render() {
		return (
			<main>
				<article className="pageText">
					<h1>{this.state.query}</h1>
					{this.state.pageText}
				</article>
			</main>
		)
	}
}

export default App
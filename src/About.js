import React from "react";

const About = () => (
	<main>
		<article className="pageText">
			<header className="pageHeader">
				<h1>About</h1>
			</header>
			<p>
				Read Wikipedia is a project by Evan MacBride. It was built with	<a href="https://reactjs.org/">React</a> and the <a href="https://www.mediawiki.org/wiki/API:Main_page">Wikipedia API</a>. 
				You can see other projects Evan has made on his <a href="https://evanmacbride.dev">personal website</a>,
				and you can view the GitHub repository for Read Wikipedia <a href="https://github.com/evanmacbride/read-wikipedia">here</a>.
			</p>
			<p>
				If you enjoyed this project, or if you enjoy Wikipedia in 
				general, please consider <a href="https://wikimediafoundation.org/">donating</a> to the Wikimedia Foundation directly.
			</p>
		</article>
	</main>
);

export default About;

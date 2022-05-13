"use strict";

const e = React.createElement;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
There's also [links](https://www.freecodecamp.org),
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

You can also make text **bold**... whoa!

> Block Quotes!

Heres some code, \`<div></div>\`, between 2 backticks.

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

\`\`\`;
		// this is multi-line code:

		function anotherExample(firstLine, lastLine) {
			if (firstLine == "\`\`\`" && lastLine == "\`\`\`") {
				return multiLineCode;
			}
		}
		\`\`\`
        

`,
		};

		this.updateText = this.updateText.bind(this);
	}

	updateText(e) {
		console.log(e.target.value);
		this.setState({ text: e.target.value });
	}

	render() {
		return (
			<div>
				<EditBox changeHandler={this.updateText} text={this.state.text} />
				<PreviewBox text={this.state.text} />
			</div>
		);
	}
}

var EditBox = (props) => {
	return (
		<div>
			<textarea onChange={props.changeHandler} id="editor">
				{props.text}
			</textarea>
		</div>
	);
};

var PreviewBox = (props) => {
	return (
		<div>
			<div id="preview" dangerouslySetInnerHTML={{ __html: marked.parse(props.text) }}></div>
		</div>
	);
};

const domContainer = document.getElementById("app");
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);

import React from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';

class Intro extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		expanded: true
  	};
  }

  handleExpandChange(expanded) {
    this.setState({expanded: expanded});
  }

  render() {
    return (
      	<Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange.bind(this)}>
      	<CardTitle title="Hans Kilian - resumé" actAsExpander={true} showExpandableButton={true} />
	    	<CardText expandable={true}>
          <img src="hans.jpg" width="300" height="300" style={{ float: 'right', marginLeft: '16px' }} />
    	  		Hans is a very experienced .NET developer with over 30 years of IT experience. He has broad experience ranging from mainframe to web development. Hans has also worked in a variety of roles such as developer, architect and project manager.<br /><br />Hans focuses on creating applications with the least amount of code that fulfill both explicit and implicit business requirements.<br /><br />Hans works best in agile, cross-functional teams where his many years of experience helps him understand business requirements and transform them into working software as fast as possible.<br /><br />His current favorite technology stack is ES6 (Javascript) with React for the frontend and C# for the backend. His solutions favors domain-driven design, microservices, loose coupling using events and automated testing.<br /><br />Hans is passionate about systems development in general, including processes and organizational setups that support it.<br /><br />Hans is married to Birgitte and lives in rural northern Zealand with 4 children, 4 horses and 4 cats.
    		</CardText>
  	  	</Card>
	);
  }
};

export default Intro;
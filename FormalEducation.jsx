import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

class FormalEducation extends React.Component {
  render() {
    return (
      	<Card style={{ marginTop: 16}} >
        <CardHeader title="Formal education and certifications" actAsExpander={true} showExpandableButton={true} />
        <CardText expandable={true}>
          EDB assistent<br />
          <i>Electronic Data Processing assistant</i><br />
          Købmandsskolen, EDB-skolen, 1984<br />
          <br />
          HD (Informatik og økonomistyring)<br />
          <i>Graduate diploma in business administration (Informatics and Management Accounting)</i><br />
          Copenhagen Business School, 1994<br />
          <br />
          Certified Scrum Master<br />
          Mike Cohn, Mountain Goat Software, 2010<br />
        </CardText>
  	  	</Card>
	);
  }
};

export default FormalEducation;
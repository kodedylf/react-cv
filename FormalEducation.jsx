import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

class FormalEducation extends React.Component {
  render() {
    return (
      	<Card style={{ marginTop: 16}} >
        <CardHeader title="Formal education" actAsExpander={true} showExpandableButton={true} />
        <CardText expandable={true}>
          EDB assistent<br />
          HD (Informatik og økonomistyring)<br />
          Certified Scrum Master
        </CardText>
  	  	</Card>
	);
  }
};

export default FormalEducation;
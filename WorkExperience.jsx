import React from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';

class WorkExperience extends React.Component {
  render() {
    return (
      <Card style={{ marginTop: 16}} >
        <CardHeader title="Work experience" actAsExpander={true} showExpandableButton={true} />
	    	<CardText expandable={true}>
          {this.props.experience.map(item =>
            <div key={item.id} >
              <div style={{ width: '12%', display: 'inline-block', verticalAlign: 'top' }} >{item.fromYear} - {item.toYear}</div>
              <div style={{ width: '88%', display: 'inline-block', verticalAlign: 'top' }} ><i>{item.title} at {item.company}</i><br />{item.description}<br />Tools used: {item.tools.join(", ")}</div>
              <div>&nbsp;</div>
            </div>
          )}
    		</CardText>
  	  </Card>
	  );
  }
};

export default WorkExperience;
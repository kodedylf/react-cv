import React from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';

class Skills extends React.Component {
  render() {
    return (
      <Card style={{ marginTop: 16}} >
        <CardHeader title="Skills" actAsExpander={true} showExpandableButton={true} />
	    	<CardText expandable={true}>
    	  		 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      			 Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
		    	   Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      			 Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    		</CardText>
  	  </Card>
	  );
  }
};

export default Skills;
import React from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import StarMeter from './StarMeter';

class Skills extends React.Component {
  render() {
    return (
      <Card style={{ marginTop: 16}} >
        <CardHeader title="Skills" actAsExpander={true} showExpandableButton={true} />
	    	<CardText expandable={true}>
          {this.props.skills.map(group => 
            <div key={group.id}>
              <table width="100%" style={{ marginTop: '5px' }}>
                <tr><td width="50%"><b>{group.groupTitle}</b></td><td width="25%">Mastery</td><td width="25%">Last used</td></tr>
                {group.skills.map(skill =>
                  <tr key={skill.id}><td>{skill.name}</td><td><StarMeter stars={skill.level} /></td><td>{skill.lastUsed}</td></tr>
                )}
              </table>
              <div>&nbsp;</div>
            </div>
          )}
    		</CardText>
  	  </Card>
	  );
  }
};

export default Skills;
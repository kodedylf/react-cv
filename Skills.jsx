import React from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class Skills extends React.Component {
  render() {
    return (
      <Card style={{ marginTop: 16}} >
        <CardHeader title="Skills" actAsExpander={true} showExpandableButton={true} />
	    	<CardText expandable={true}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableHeaderColumn>Skill</TableHeaderColumn>
            <TableHeaderColumn>Mastery</TableHeaderColumn>
            <TableHeaderColumn>Last used</TableHeaderColumn>
          </TableHeader>
          {this.props.skills.map(group => 
            <div>
              <b>{group.groupTitle}</b>
              <Table key={group.id}>{group.title}
                <TableBody displayRowCheckbox={false}>
                  {group.skills.map(skill =>
                    <TableRow id={skill.id} displayBorder={false} >
                      <TableRowColumn>{skill.name}</TableRowColumn>
                      <TableRowColumn>{skill.level}</TableRowColumn>
                      <TableRowColumn>{skill.lastUsed}</TableRowColumn>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          )}
    		</CardText>
  	  </Card>
	  );
  }
};

export default Skills;
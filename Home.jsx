import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import {fullWhite} from 'material-ui/styles/colors';
import Intro from './Intro';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import ContactInfo from './ContactInfo';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const style = {
  margin: 12,
};

const workExperience = [
  {
    id: 1,
    fromYear: 1999,
    toYear: 2001,
    title: 'Developer',
    company: 'Danske Bank',
    description: 'Lorem Ipsum',
    tools: ['C#', 'SQL Server', 'ECMAScript 6', 'Microservices']
  },
  {
    id: 2,
    fromYear: 1999,
    toYear: 2001,
    title: 'Developer',
    company: 'Danske Bank',
    description: 'Blablabla',
    tools: ['C#', 'SQL Server', 'ECMAScript 6', 'Microservices']
  }
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { invId: "" };
  }

  render() {
    return (<div>
              <Intro />
              <WorkExperience experience={workExperience}/>
              <Skills />
              <ContactInfo />
            </div>);
  }
};

export default Home;
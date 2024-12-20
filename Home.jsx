import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import {fullWhite} from 'material-ui/styles/colors';
import Intro from './Intro';
import FormalEducation from './FormalEducation';
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
    fromYear: 2022,
    toYear: 2024,
    title: 'External consultant',
    company: "Keylane A/S",
    description: "Full-stack developer. Pension advisory system. Maintenance on existing system. Migration to new technology",
    tools: ['C#', 'Javascript', '.NET Framework', '.NET core', 'SQL Server', 'Docker', 'Kubernetes', 'Helm', 'IIS']
  },
  {
    id: 2,
    fromYear: 2021,
    toYear: 2022,
    title: 'External consultant',
    company: "Byggeskadefonden",
    description: 'Full-stack developer. Internal line-of-business system. External web portal',
    tools: ['C#', 'Javascript', '.NET core', 'Blazor', 'ASP.NET', 'SQL Server', 'Angular 1.x', 'WCF', 'SOAP', 'WPF', 'OpenShift']
  },
  {
    id: 3,
    fromYear: 2017,
    toYear: 2021,
    title: 'External consultant',
    company: "Forca",
    description: 'Full-stack developer. Pension forecast solution based on Edlund Lifelink. Solution to coordinate deletion of data across sub-systems (GDPR). Moved client/server communication from .NET remoting to WCF with HTTPS.',
    tools: ['C#', '.NET', 'ASP.NET', 'Winforms', 'SQL Server', 'WCF', 'SOAP', 'HTTPS', 'XML', 'Edlund Lifelink', 'NUnit', 'NSubstitute']
  },
  {
    id: 4,
    fromYear: 2015,
    toYear: 2017,
    title: 'Corporate Entrepreneur',
    company: 'MobileLife / Danske Bank A/S',
    description: 'Broad area of responsibility but primarily developer / architect. Development of system for automated credit decisions on loans for home purchase (sunday.dk). Proposal of new architecture for modeling platform. Setting up new operations enviroment based on on-prem private cloud technologies.',
    tools: ['Domain-driven design', 'Event driven systems', 'C#', 'SQL Server (Entity Framework)', 'WCF', 'SOAP', 'Rest', 'XML', 'JSON', 'RabbitMQ', 'ELK', 'React', 'ES6', 'Microservices', 'Integration with legacy systems']
  },
  {
    id: 5,
    fromYear: 2009,
    toYear: 2015,
    title: 'Consultant',
    company: 'Danske Bank A/S',
    description: 'Developer and architect in the Credit & Risk department. Development of system for valuation of investment properties. Development of document storage system. Development of system for calculating customer exposure. Maintaining existing system portfolio.',
    tools: ['C#', 'SQL Server (Entity Framework)', 'WCF', 'SOAP', 'Rest', 'XML', 'Web', 'PL/1', 'DB2', 'Domain-driven design']
  },
  {
    id: 6,
    fromYear: 2008,
    toYear: 2009,
    title: 'Consultant',
    company: 'BRFKredit A/S',
    description: 'Technical project manager on e-Registry project. Responsible for a development team of 13.',
    tools: ['COBOL', 'C#', 'XML', 'Biztalk', 'C', 'MVS', 'DB2', 'Windows', 'SQL server', 'MQ', 'Microsoft Host Integration Server']
  },
  {
    id: 7,
    fromYear: 2004,
    toYear: 2008,
    title: 'Consultant',
    company: 'BRFKredit A/S',
    description: 'Maintenance on mortgaging system.',
    tools: ['CICS', 'COBOL', 'DB2', 'C', 'Foundation', 'Windows', 'Perl', 'C++']
  },
  {
    id: 8,
    fromYear: 2003,
    toYear: 2004,
    title: 'Consultant',
    company: 'IBM Denmark A/S',
    description: 'Developer on technical conversion project from Natural Adabas to VAG (now EGL).',
    tools: ['CICS', 'VAG', 'COBOL', 'DB2']
  },
  {
    id: 9,
    fromYear: 1997,
    toYear: 2003,
    title: 'Consultant',
    company: 'SDC A/S',
    description: 'Main responsible for development, test and maintenance of the accountancy part of FED. FED is SDC\'s system used for trading stocks and bonds. Development of system to assist in testing the main system.',
    tools: ['PL/1', 'VAG', 'CICS', 'DB2', 'SAS']
  },
  {
    id: 10,
    fromYear: 1992,
    toYear: 1996,
    title: 'Operations consultant',
    company: 'ATP',
    description: 'Operations automation, storage administration and security administration.',
    tools: ['SAS', 'REXX', 'DB2', 'RACF', 'DFSMS']
  },
  {
    id: 11,
    fromYear: 1987,
    toYear: 1992,
    title: 'Systems programmer',
    company: 'ATP',
    description: 'Responsible for maintaining DB2 and CICS installation. Support on SAS product line for developers.',
    tools: ['DB2', 'CICS', 'SAS', 'MVS', 'PL/1', 'S/370 Assembler']
  },
  {
    id: 12,
    fromYear: 1986,
    toYear: 1987,
    title: 'Developer',
    company: 'ATP',
    description: 'Development of system for extracting production data for use in test environment.',
    tools: ['PL/1', 'DB2', 'VSAM']
  },
  {
    id: 13,
    fromYear: 1984,
    toYear: 1986,
    title: 'Systems administrator',
    company: 'Købmandsskolen, EDB-skolen',
    description: 'Operations management of 2 mini-computers from Norsk Data and a number of RC855 and Piccoline computers. Development of various utilities to assist in that.',
    tools: ['CP/M', 'Pascal']
  }
];

const skills = [
  {
    id: 1,
    groupTitle: 'Programming languages',
    skills: [
      { id: 1, name: 'C#', level: 5, lastUsed: 2024 },
      { id: 2, name: 'Javascript / ES6', level: 3, lastUsed: 2024 },
      { id: 3, name: 'PL/1', level: 5, lastUsed: 2016 },
      { id: 4, name: 'COBOL', level: 4, lastUsed: 2010 },
      { id: 5, name: 'Java', level: 2, lastUsed: 2010 }
    ]
  },
  {
    id: 2,
    groupTitle: 'Infrastructure',
    skills: [
      { id: 1, name: 'Windows', level: 5, lastUsed: 2024 },
      { id: 2, name: 'SQL Server', level: 5, lastUsed: 2024 },
      { id: 3, name: 'MySQL', level: 3, lastUsed: 2009 },
      { id: 4, name: 'RabbitMQ', level: 3, lastUsed: 2017 },
      { id: 5, name: 'ElasticSearch', level: 3, lastUsed: 2021 },
      { id: 6, name: 'Kibana', level: 3, lastUsed: 2021 },
      { id: 7, name: 'Docker', level: 4, lastUsed: 2024 },
      { id: 8, name: 'Kubernetes', level: 2, lastUsed: 2024 },
      { id: 9, name: 'DB2', level: 5, lastUsed: 2015 },
      { id: 10, name: 'CICS', level: 5, lastUsed: 2015 }
    ]
  },
  {
    id: 3,
    groupTitle: 'Development tools',
    skills: [
      { id: 1, name: 'Visual Studio 2022', level: 5, lastUsed: 2022 },
      { id: 2, name: 'JetBrains Rider', level: 5, lastUsed: 2024 },
      { id: 3, name: 'Azure DevOps', level: 4, lastUsed: 2021 },
      { id: 4, name: 'Git', level: 5, lastUsed: 2024 },
      { id: 5, name: 'Octopus deploy', level: 3, lastUsed: 2017 },
      { id: 6, name: 'TSO', level: 5, lastUsed: 2017 },
      { id: 7, name: 'Webpack', level: 2, lastUsed: 2019 }
    ]
  },
  {
    id: 4,
    groupTitle: '.NET frameworks',
    skills: [
      { id: 1, name: '.NET 4.8', level: 5, lastUsed: 2024 },
      { id: 2, name: '.NET Core', level: 5, lastUsed: 2024 },
      { id: 3, name: 'ASP.NET', level: 5, lastUsed: 2024 },
      { id: 4, name: 'Blazor', level: 3, lastUsed: 2021 },
      { id: 5, name: 'Razor pages', level: 3, lastUsed: 2019 },
      { id: 6, name: 'Entity Framework', level: 5, lastUsed: 2024 },
      { id: 7, name: 'WCF', level: 5, lastUsed: 2021 },
      { id: 8, name: 'NUnit', level: 4, lastUsed: 2021 },
      { id: 9, name: 'Castle Windsor', level: 4, lastUsed: 2017 },
      { id: 10, name: 'Serilog', level: 4, lastUsed: 2024 },
      { id: 11, name: 'Moq', level: 4, lastUsed: 2024 },
      { id: 12, name: 'NSubstitute', level: 4, lastUsed: 2021 },
      { id: 13, name: 'Topshelf', level: 3, lastUsed: 2017 }
    ]
  },
  {
    id: 5,
    groupTitle: 'Javascript frameworks',
    skills: [
      { id: 1, name: 'React', level: 4, lastUsed: 2024 },
      { id: 2, name: 'Angular 1.x', level: 2, lastUsed: 2021 },
      { id: 3, name: 'Material UI', level: 3, lastUsed: 2018 },
      { id: 4, name: 'Bootstrap', level: 3, lastUsed: 2021 }
    ]
  },
  {
    id: 6,
    groupTitle: 'User interface',
    skills: [
      { id: 1, name: 'HTML', level: 5, lastUsed: 2024 },
      { id: 2, name: 'CSS', level: 4, lastUsed: 2024 },
      { id: 3, name: 'Winforms', level: 3, lastUsed: 2021 },
    ]
  },
  {
    id: 7,
    groupTitle: 'Communication',
    skills: [
      { id: 1, name: 'XML', level: 5, lastUsed: 2021 },
      { id: 2, name: 'SOAP', level: 5, lastUsed: 2021 },
      { id: 3, name: 'JSON', level: 5, lastUsed: 2024 },
      { id: 4, name: 'REST', level: 5, lastUsed: 2024 }
    ]
  },
  {
    id: 8,
    groupTitle: 'Methodologies',
    skills: [
      { id: 1, name: 'Domain-driven design', level: 5, lastUsed: 2024 },
      { id: 2, name: 'Scrum', level: 5, lastUsed: 2021 },
      { id: 3, name: 'UML', level: 4, lastUsed: 2024 }
    ]
  },
  {
    id: 8,
    groupTitle: 'Business domains',
    skills: [
      { id: 1, name: 'Real estate mortaging', level: 4, lastUsed: 2017 },
      { id: 2, name: 'Pension', level: 3, lastUsed: 2024 },
      { id: 3, name: 'Asset valuation', level: 4, lastUsed: 2015 },
      { id: 4, name: 'Accounting', level: 3, lastUsed: 2003 }
    ]
  },
  {
    id: 9,
    groupTitle: 'Business solutions',
    skills: [
      { id: 1, name: 'Edlund Lifelink', level: 3, lastUsed: 2019 }
    ]
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
              <FormalEducation />
              <WorkExperience experience={workExperience}/>
              <Skills skills={skills}/>
              <ContactInfo />
            </div>);
  }
};

export default Home;

import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import FontAwesome from 'react-fontawesome';

const iconStyle = { paddingLeft: 0, paddingRight: 8, paddingTop: 0, paddingBottom: 0 };

class ContactInfo extends React.Component {
  render() {
    return (<Paper style={{ padding: 16, marginTop: 16 }}>
                <div style={{ display: 'inline-block', paddingRight: 20 }}>Contact:</div>
                <FontAwesome name='phone' style={iconStyle} />+45 5050 3270
                <div style={{ width: 30, display: 'inline-block' }} ></div>
                <a href="mailto:hans@kilianconsult.dk" style={{ color: 'inherit', textDecoration: 'inherit', cursor: 'pointer' }}><FontAwesome name='envelope' style={iconStyle} />hans@kilianconsult.dk</a>
                <div style={{ width: 30, display: 'inline-block' }} ></div>
                <a href="https://github.com/kodedylf/react-cv" style={{ color: 'inherit', textDecoration: 'inherit', cursor: 'pointer' }}><FontAwesome name='github' style={iconStyle} />Github</a>
              </Paper>);
  }
};

export default ContactInfo;
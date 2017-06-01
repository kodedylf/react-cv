import React from 'react';
import FontAwesome from 'react-fontawesome';

class StarMeter extends React.Component {
	render() {
		var result = [];
		for (var i=0; i < this.props.stars; i++) {
			result.push(<FontAwesome name='star' />);
		}
		for (var i=0; i < 5-this.props.stars; i++) {
			result.push(<FontAwesome name='star-o' />);
		}
		return(<div>{result}</div>);
	}
}

export default StarMeter;